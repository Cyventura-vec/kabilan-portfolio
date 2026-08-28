/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [] },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Build-Ref',
            value: 'Y2hlY2sgb3B0aW9ucw==',
          },
          {
            key: 'X-Cache',
            value: 'HIT',
          },
          {
            key: 'X-Request-ID',
            value: '9f2a-112c-beef',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
