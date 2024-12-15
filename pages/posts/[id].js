import Layout from "../../components/Layout";
import  "../../styles/globals.css";

export async function getStaticPaths() {
    // Define the paths dynamically
    const posts = [{ id: 1 }, { id: 2 }];
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Simulate fetching data for a single post
    const post = { id: params.id, title: `Post ${params.id}`, description: "This is a detailed view." };

    return {
        props: { post },
    };
}

export default function Post({ post }) {
    return (
        <Layout>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </Layout>
    );
}
