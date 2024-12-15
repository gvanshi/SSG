import Layout from "../components/Layout";
import "../styles/globals.css"; // Import global CSS

export async function getStaticProps() {
    // Simulating data fetch at build time
    const posts = [
        { id: 1, title: "First Post", description: "This is the first post." },
        { id: 2, title: "Second Post", description: "This is the second post." },
    ];

    return {
        props: { posts },
    };
}

export default function Posts({ posts }) {
    return (
        <Layout>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>
                            <strong>{post.title}</strong>
                        </a>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
