const rewritesConfig = require('./rewrites/index');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return rewritesConfig;
  },
  images: {
    // loader: 'akamai',
    // path: '',
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ebridge-dev.s3.ap-northeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ebridge.s3.ap-northeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ebridge.exchange',
      },
      {
        protocol: 'https',
        hostname: 'cms.ebridge.exchange',
      },
      {
        protocol: 'https',
        hostname: 'home.ebridge.exchange',
      },
      {
        protocol: 'https',
        hostname: 'testhome.ebridge.exchange',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  productionBrowserSourceMaps: true,
};
