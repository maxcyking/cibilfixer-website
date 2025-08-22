/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Vercel SSR support
  // output: 'export', // Removed for SSR

  // Enable trailing slash for better SEO
  trailingSlash: true,

  // Optimize images for Vercel
  images: {
    domains: [
      'localhost',
      'firebasestorage.googleapis.com',
      'future-capital-91977.firebasestorage.app',
      'lh3.googleusercontent.com', // Google profile images
      'avatars.githubusercontent.com', // GitHub avatars
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable experimental features for better performance
  experimental: {
    scrollRestoration: true,
  },

  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Exclude undici from webpack processing
    config.externals = [...(config.externals || []), 'undici'];

    // Add fallbacks for browser environment
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      };
    }

    // Ignore problematic modules
    config.module = {
      ...config.module,
      exprContextCritical: false,
    };

    // Suppress warnings
    config.ignoreWarnings = [
      { module: /node_modules\/undici/ },
      { module: /node_modules\/firebase/ },
    ];

    // Optimize for production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            firebase: {
              test: /[\\/]node_modules[\\/](firebase|@firebase)[\\/]/,
              name: 'firebase',
              chunks: 'all',
              priority: 10,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 5,
            },
          },
        },
      };
    }

    return config;
  },

  // Enable SWC minification for better performance
  swcMinify: true,

  // Compress responses
  compress: true,

  // Enable React strict mode
  reactStrictMode: true,

  // Power pack for Vercel
  poweredByHeader: false,

  // Environment variables that should be available on the client
  env: {
    CUSTOM_KEY: 'cibilfixer-app',
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },

  // Redirects for better SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig