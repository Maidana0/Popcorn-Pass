/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost","image.tmdb.org"], 
    },
    env:{
        DEV_API_PATH: "http://localhost:8080",
        PROD_API_PATH: "https://s15-11-m-java-react-production.up.railway.app",
    }
};

export default nextConfig;
