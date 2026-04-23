import type { NextConfig } from 'next';

const repoName = 'bluegrass-festival-sk';
const isPagesDeploy = process.env.DEPLOY_TARGET === 'pages';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isPagesDeploy ? `/${repoName}` : '',
  assetPrefix: isPagesDeploy ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isPagesDeploy ? `/${repoName}` : '',
  },
};

export default nextConfig;
