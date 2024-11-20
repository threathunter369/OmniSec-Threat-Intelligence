import type { NextApiRequest, NextApiResponse } from 'next';

type ThreatSearchResult = {
  type: string;
  severity: string;
  description: string;
  source: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ results: ThreatSearchResult[] }>
) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  try {
    const { query } = req.body;

    // TODO: Integrate with actual threat intelligence APIs
    // For now, return mock data
    const mockResults: ThreatSearchResult[] = [
      {
        type: 'Malware',
        severity: 'High',
        description: `Sample threat data for query: ${query}`,
        source: 'Mock Database',
      },
      {
        type: 'Phishing',
        severity: 'Medium',
        description: 'Potential phishing attempt detected',
        source: 'Mock Database',
      },
    ];

    res.status(200).json({ results: mockResults });
  } catch (error) {
    console.error('Threat search error:', error);
    res.status(500).json({ results: [] });
  }
}
