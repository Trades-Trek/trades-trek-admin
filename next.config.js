module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverRuntimeConfig: {
    secret:
      'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING',
  },
  env: {
    baseApiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  },
  images: {
    loader: 'imgix',
    path: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};
