/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/compare/model-viewer",
        destination: "https://test2.softmare.xyz",
        permanent: false,
      },
      {
        source: "/compare/view3D",
        destination: "https://test2.softmare.xyz/view3D",
        permanent: false,
      },
    ];
  },
};
