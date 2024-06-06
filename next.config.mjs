/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   env: {
     NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
     // Add other environment variables as needed
   },
 };
 
 export default nextConfig;
 