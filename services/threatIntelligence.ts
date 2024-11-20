import axios from 'axios';

const VIRUSTOTAL_API_KEY = process.env.VIRUSTOTAL_API_KEY;
const ABUSEIPDB_API_KEY = process.env.ABUSEIPDB_API_KEY;
const ALIENVAULT_API_KEY = process.env.ALIENVAULT_API_KEY;

// Validate API keys are present
if (!VIRUSTOTAL_API_KEY || !ABUSEIPDB_API_KEY || !ALIENVAULT_API_KEY) {
  throw new Error('Missing required API keys. Please check your environment configuration.');
}

interface ThreatIntelligenceResponse {
  source: string;
  malicious: boolean;
  confidence: number;
  details: any;
}

export const threatIntelligenceService = {
  async checkIP(ip: string): Promise<ThreatIntelligenceResponse[]> {
    const results: ThreatIntelligenceResponse[] = [];

    // VirusTotal Check
    try {
      const vtResponse = await axios.get(
        `https://www.virustotal.com/api/v3/ip_addresses/${ip}`,
        {
          headers: {
            'x-apikey': VIRUSTOTAL_API_KEY
          }
        }
      );

      if (!vtResponse.data?.data?.attributes?.last_analysis_stats) {
        throw new Error('Invalid response from VirusTotal API');
      }

      results.push({
        source: 'VirusTotal',
        malicious: vtResponse.data.data.attributes.last_analysis_stats.malicious > 0,
        confidence: (vtResponse.data.data.attributes.last_analysis_stats.malicious / 
                    vtResponse.data.data.attributes.last_analysis_stats.total) * 100,
        details: vtResponse.data.data.attributes
      });
    } catch (error: any) {
      console.error('VirusTotal API Error:', error);
      if (error.response?.status === 401) {
        throw new Error('Invalid VirusTotal API key');
      }
      throw new Error(error.message || 'Error checking IP with VirusTotal');
    }

    // AbuseIPDB Check
    try {
      const abuseResponse = await axios.get(
        'https://api.abuseipdb.com/api/v2/check',
        {
          params: {
            ipAddress: ip,
            maxAgeInDays: 90
          },
          headers: {
            'Key': ABUSEIPDB_API_KEY
          }
        }
      );

      if (!abuseResponse.data?.data?.abuseConfidenceScore) {
        throw new Error('Invalid response from AbuseIPDB API');
      }

      results.push({
        source: 'AbuseIPDB',
        malicious: abuseResponse.data.data.abuseConfidenceScore > 50,
        confidence: abuseResponse.data.data.abuseConfidenceScore,
        details: abuseResponse.data.data
      });
    } catch (error: any) {
      console.error('AbuseIPDB API Error:', error);
      if (error.response?.status === 401) {
        throw new Error('Invalid AbuseIPDB API key');
      }
      throw new Error(error.message || 'Error checking IP with AbuseIPDB');
    }

    // AlienVault OTX Check
    try {
      const otxResponse = await axios.get(
        `https://otx.alienvault.com/api/v1/indicators/IPv4/${ip}/general`,
        {
          headers: {
            'X-OTX-API-KEY': ALIENVAULT_API_KEY
          }
        }
      );

      if (!otxResponse.data?.pulse_info?.count) {
        throw new Error('Invalid response from AlienVault OTX API');
      }

      results.push({
        source: 'AlienVault OTX',
        malicious: otxResponse.data.pulse_info.count > 0,
        confidence: otxResponse.data.pulse_info.count > 0 ? 75 : 0,
        details: otxResponse.data
      });
    } catch (error: any) {
      console.error('AlienVault OTX API Error:', error);
      if (error.response?.status === 401) {
        throw new Error('Invalid AlienVault OTX API key');
      }
      throw new Error(error.message || 'Error checking IP with AlienVault OTX');
    }

    return results;
  },

  async checkURL(url: string): Promise<ThreatIntelligenceResponse[]> {
    const results: ThreatIntelligenceResponse[] = [];

    // VirusTotal URL Check
    try {
      // First, submit the URL for scanning
      const submitResponse = await axios.post(
        'https://www.virustotal.com/api/v3/urls',
        `url=${encodeURIComponent(url)}`,
        {
          headers: {
            'x-apikey': VIRUSTOTAL_API_KEY,
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      );

      const analysisId = submitResponse.data.data.id;

      // Wait for analysis to complete and get results
      const vtResponse = await axios.get(
        `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
        {
          headers: {
            'x-apikey': VIRUSTOTAL_API_KEY
          }
        }
      );

      if (!vtResponse.data?.data?.attributes?.stats) {
        throw new Error('Invalid response from VirusTotal API');
      }

      results.push({
        source: 'VirusTotal',
        malicious: vtResponse.data.data.attributes.stats.malicious > 0,
        confidence: (vtResponse.data.data.attributes.stats.malicious / 
                    vtResponse.data.data.attributes.stats.total) * 100,
        details: vtResponse.data.data.attributes
      });
    } catch (error: any) {
      console.error('VirusTotal API Error:', error);
      if (error.response?.status === 401) {
        throw new Error('Invalid VirusTotal API key');
      }
      throw new Error(error.message || 'Error checking URL with VirusTotal');
    }

    return results;
  },

  async checkHash(hash: string): Promise<ThreatIntelligenceResponse[]> {
    const results: ThreatIntelligenceResponse[] = [];

    // VirusTotal Hash Check
    try {
      const vtResponse = await axios.get(
        `https://www.virustotal.com/api/v3/files/${hash}`,
        {
          headers: {
            'x-apikey': VIRUSTOTAL_API_KEY
          }
        }
      );

      if (!vtResponse.data?.data?.attributes?.last_analysis_stats) {
        throw new Error('Invalid response from VirusTotal API');
      }

      results.push({
        source: 'VirusTotal',
        malicious: vtResponse.data.data.attributes.last_analysis_stats.malicious > 0,
        confidence: (vtResponse.data.data.attributes.last_analysis_stats.malicious / 
                    vtResponse.data.data.attributes.last_analysis_stats.total) * 100,
        details: vtResponse.data.data.attributes
      });
    } catch (error: any) {
      console.error('VirusTotal API Error:', error);
      if (error.response?.status === 401) {
        throw new Error('Invalid VirusTotal API key');
      }
      throw new Error(error.message || 'Error checking hash with VirusTotal');
    }

    return results;
  }
};
