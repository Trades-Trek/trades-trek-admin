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
    baseApiUrl: 'https://api.tradestrek.com' || 'http://localhost:5000',
  },
  publicRuntimeConfig: {
    apiUrl: 'https://api.tradestrek.com' || 'http://localhost:5000',
  },
  images: {
    loader: 'imgix',
    path: 'https://trades-trek-admin-prod.vercel.app' || 'http://localhost:3000',
  },
};
