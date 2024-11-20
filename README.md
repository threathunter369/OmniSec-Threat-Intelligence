# OmniSec Live - AI-Powered Cyber Threat Intelligence Platform

OmniSec Live is a comprehensive cybersecurity platform that provides real-time threat intelligence and AI-powered security recommendations. The platform integrates with multiple threat intelligence sources and uses advanced AI to analyze potential security threats.

## Features

- User Authentication with Email Verification
- Real-time Threat Intelligence
- Multi-source Threat Analysis (VirusTotal, AbuseIPDB, AlienVault OTX)
- AI-powered Security Recommendations
- Subscription-based Access Tiers
- Modern, Responsive UI

## Tech Stack

- Frontend: React.js
- Backend: Next.js
- Authentication: Firebase
- Database: Firestore
- AI: OpenAI
- Payment Processing: Stripe
- Styling: Chakra UI & Tailwind CSS

## Prerequisites

- Node.js 16+ and npm
- Firebase Account
- API Keys for:
  - VirusTotal
  - AbuseIPDB
  - AlienVault OTX
  - OpenAI
  - Stripe

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/omnisec-live.git
cd omnisec-live
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your API keys:
```env
# Copy the contents from .env.example
```

4. Set up Firebase:
- Create a new Firebase project
- Enable Authentication (Email/Password)
- Set up Firestore database
- Add your Firebase configuration to `.env.local`

5. Set up Stripe:
- Create a Stripe account
- Add products and prices for subscription tiers
- Add Stripe API keys to `.env.local`

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/OmniSec-Live
│
├── components/          # React components
├── context/            # Context providers
├── pages/              # Next.js pages
├── public/             # Static assets
├── services/           # API services
├── styles/             # Global styles
├── types/              # TypeScript types
└── utils/              # Utility functions
```

## API Integration

The platform integrates with multiple threat intelligence APIs:

- VirusTotal: File/URL/IP analysis
- AbuseIPDB: IP reputation checking
- AlienVault OTX: Threat intelligence
- OpenAI: AI-powered analysis
- Stripe: Payment processing

## Subscription Tiers

1. Regular ($10/month)
   - Basic Threat Intelligence
   - IP and URL Scanning
   - Basic AI Recommendations

2. Pro ($20/month)
   - Advanced Threat Intelligence
   - IP, URL, and Hash Scanning
   - Detailed AI Recommendations
   - Real-time Alerts

3. Enterprise ($50/month)
   - Full Threat Intelligence Suite
   - Custom API Integration
   - Advanced AI Analysis
   - Dedicated Support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@omnisec-live.com or open an issue in the repository.
