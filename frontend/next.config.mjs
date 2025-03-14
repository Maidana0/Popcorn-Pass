/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "4000",
                pathname: "/(.*)"
            },
            {
                protocol: "https",
                hostname: "popcorn-pass-maidana07-projects.vercel.app",
                port: "",
                pathname: "/(.*)"
            },
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
                pathname: "/t/p/**"
            },
            {
                protocol: "https",
                hostname: "w7.pngwing.com",
                port: "",
                pathname: "/pngs/476/886/png-transparent-man-holding-wrench-preventive-maintenance-total-productive-maintenance-predictive-maintenance-planned-maintenance-repair-service-hand-people-thumbnail.png"
            }
        ],
    },
    env: {
        DEV_API_PATH: "http://localhost:8080",
        PROD_API_PATH: "https://s15-11-m-java-react-production.up.railway.app",
        TOKEN_THMDB: process.env.NEXT_PUBLIC_TOKEN_THMDB,
        MODE: process.env.NEXT_PUBLIC_MODE,
        THMDB_API_PATH: "https://api.themoviedb.org/3"
    }
};

export default nextConfig;
