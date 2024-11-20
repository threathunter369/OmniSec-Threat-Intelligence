import { NextApiRequest, NextApiResponse } from 'next';
import { searchUrl, searchIp, searchHash, searchDomain } from '../../../services/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ message: 'Query is required' });
  }

  try {
    const results: any = {};

    // URL pattern
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    // IP pattern (IPv4)
    const ipPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    // Hash patterns (MD5, SHA-1, SHA-256)
    const hashPattern = /^[a-fA-F0-9]{32}$|^[a-fA-F0-9]{40}$|^[a-fA-F0-9]{64}$/;
    // Domain pattern
    const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;

    // Determine query type and search accordingly
    if (urlPattern.test(query)) {
      results.url = await searchUrl(query);
    }
    if (ipPattern.test(query)) {
      results.ip = await searchIp(query);
    }
    if (hashPattern.test(query)) {
      results.hash = await searchHash(query);
    }
    if (domainPattern.test(query)) {
      results.domain = await searchDomain(query);
    }

    // If no specific pattern matches, try searching as domain without protocol
    if (Object.keys(results).length === 0) {
      try {
        results.domain = await searchDomain(query);
      } catch (error) {
        console.error('Error searching as domain:', error);
      }
    }

    // Process and format the results
    const formattedResults = {
      query,
      timestamp: new Date().toISOString(),
      results: results,
      summary: {
        threatLevel: calculateThreatLevel(results),
        recommendations: generateRecommendations(results),
      },
    };

    return res.status(200).json(formattedResults);
  } catch (error: any) {
    console.error('Search error:', error);
    return res.status(500).json({
      message: 'Error processing search',
      error: error.message,
    });
  }
}

function calculateThreatLevel(results: any): 'low' | 'medium' | 'high' | 'critical' {
  let score = 0;
  let maxScore = 0;

  if (results.ip?.abuseipdb) {
    score += results.ip.abuseipdb.data.abuseConfidenceScore;
    maxScore += 100;
  }

  if (results.url?.data?.attributes?.last_analysis_stats) {
    const stats = results.url.data.attributes.last_analysis_stats;
    score += (stats.malicious + stats.suspicious) * 25;
    maxScore += stats.total * 25;
  }

  if (results.domain?.virustotal?.data?.attributes?.last_analysis_stats) {
    const stats = results.domain.virustotal.data.attributes.last_analysis_stats;
    score += (stats.malicious + stats.suspicious) * 25;
    maxScore += stats.total * 25;
  }

  const normalizedScore = maxScore > 0 ? (score / maxScore) * 100 : 0;

  if (normalizedScore >= 75) return 'critical';
  if (normalizedScore >= 50) return 'high';
  if (normalizedScore >= 25) return 'medium';
  return 'low';
}

function generateRecommendations(results: any): string[] {
  const recommendations: string[] = [];

  if (results.ip?.abuseipdb?.data?.abuseConfidenceScore > 50) {
    recommendations.push('Block this IP address in your firewall');
  }

  if (results.url?.data?.attributes?.last_analysis_stats?.malicious > 0) {
    recommendations.push('Add this URL to your block list');
  }

  if (results.domain?.virustotal?.data?.attributes?.last_analysis_stats?.malicious > 0) {
    recommendations.push('Review and potentially block this domain');
  }

  if (results.hash?.data?.attributes?.last_analysis_stats?.malicious > 0) {
    recommendations.push('Quarantine files with this hash');
  }

  if (recommendations.length === 0) {
    recommendations.push('No immediate actions required, continue monitoring');
  }

  return recommendations;
}
