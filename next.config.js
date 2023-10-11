//const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taide.tw",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  // webpack: (config) => {
  //   config.resolve.alias["~"] = path.join(__dirname, "app");
  //   return config;
  // },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,DELETE,PATCH,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     // These rewrites are checked after pages/public files
  //     // are checked but before dynamic routes
  //     {
  //       source: "/public/api/:path*",
  //       destination: "https://taide.tw/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
