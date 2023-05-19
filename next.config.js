/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent.fdac157-1.fna.fbcdn.net',
            port: '',
            pathname: '/v/t39.30808-6/319531369_2432248900263653_5012719144125956361_n.jpg',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
            pathname: '/images',
          },
        ],
      },
}

module.exports = nextConfig
