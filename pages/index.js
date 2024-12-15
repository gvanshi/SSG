import Layout from "../components/Layout";
import "../styles/globals.css"; // Import global CSS

export default function Home() {
    return (
        <Layout>
            <h2>Welcome to the Static Site Generation Project</h2>
            <p>This project demonstrates how to use Next.js for Static Site Generation.</p>
            <p>
                Check out the <a href="/posts">Posts</a> page to see pre-rendered content with dynamic routes.
            </p>
        </Layout>
    );
}
