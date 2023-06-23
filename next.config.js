/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mongdb_url:
      "mongodb+srv://USER:PASSWORD@cluster0.pmuodil.mongodb.net/main?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
