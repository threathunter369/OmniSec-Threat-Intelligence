import axios from 'axios';

// Mock threat intelligence data
const mockData = {
  urls: {
    'malicious.com': { risk: 'high', reason: 'Known phishing domain' },
    'suspicious.net': { risk: 'medium', reason: 'Suspicious activity reported' },
  },
  ips: {
    '192.168.1.100': { risk: 'high', reason: 'Command & Control server' },
    '10.0.0.50': { risk: 'medium', reason: 'Suspicious traffic patterns' },
  },
  hashes: {
    'a1b2c3d4': { risk: 'critical', reason: 'Known ransomware variant' },
    'e5f6g7h8': { risk: 'high', reason: 'Malicious file signature' },
  },
  domains: {
    'evil.com': { risk: 'critical', reason: 'Active malware distribution' },
    'sketchy.org': { risk: 'medium', reason: 'Reported suspicious activity' },
  },
};

// Helper function to simulate API delay
const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 1000));

export const searchUrl = async (url: string) => {
  await simulateApiDelay();
  const mockResult = mockData.urls[url] || { risk: 'low', reason: 'No threats detected' };
  return {
    data: {
      attributes: {
        last_analysis_stats: {
          malicious: mockResult.risk === 'high' ? 10 : mockResult.risk === 'medium' ? 5 : 0,
          suspicious: mockResult.risk === 'high' ? 5 : mockResult.risk === 'medium' ? 3 : 0,
          total: 20,
        },
        threat_details: mockResult.reason,
      },
    },
  };
};

export const searchIp = async (ip: string) => {
  await simulateApiDelay();
  const mockResult = mockData.ips[ip] || { risk: 'low', reason: 'No threats detected' };
  return {
    abuseipdb: {
      data: {
        abuseConfidenceScore: mockResult.risk === 'high' ? 90 : mockResult.risk === 'medium' ? 50 : 0,
        domain: ip,
        totalReports: mockResult.risk === 'high' ? 15 : mockResult.risk === 'medium' ? 5 : 0,
        lastReportedAt: new Date().toISOString(),
      },
    },
    alienvault: {
      pulse_info: {
        count: mockResult.risk === 'high' ? 10 : mockResult.risk === 'medium' ? 5 : 0,
      },
      reputation: mockResult.risk === 'high' ? -5 : mockResult.risk === 'medium' ? -2 : 0,
    },
  };
};

export const searchHash = async (hash: string) => {
  await simulateApiDelay();
  const mockResult = mockData.hashes[hash] || { risk: 'low', reason: 'No threats detected' };
  return {
    data: {
      attributes: {
        last_analysis_stats: {
          malicious: mockResult.risk === 'critical' ? 15 : mockResult.risk === 'high' ? 10 : 0,
          suspicious: mockResult.risk === 'critical' ? 8 : mockResult.risk === 'high' ? 5 : 0,
          total: 25,
        },
        threat_details: mockResult.reason,
      },
    },
  };
};

export const searchDomain = async (domain: string) => {
  await simulateApiDelay();
  const mockResult = mockData.domains[domain] || { risk: 'low', reason: 'No threats detected' };
  return {
    virustotal: {
      data: {
        attributes: {
          last_analysis_stats: {
            malicious: mockResult.risk === 'critical' ? 20 : mockResult.risk === 'high' ? 10 : mockResult.risk === 'medium' ? 5 : 0,
            suspicious: mockResult.risk === 'critical' ? 10 : mockResult.risk === 'high' ? 5 : mockResult.risk === 'medium' ? 3 : 0,
            total: 30,
          },
        },
      },
    },
    alienvault: {
      pulse_info: {
        count: mockResult.risk === 'critical' ? 15 : mockResult.risk === 'high' ? 8 : mockResult.risk === 'medium' ? 4 : 0,
      },
      reputation: mockResult.risk === 'critical' ? -8 : mockResult.risk === 'high' ? -5 : mockResult.risk === 'medium' ? -2 : 0,
    },
  };
};
