export default function Layout({ children }) {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <header>
                <h1>Static Site Generation Project</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/posts">Posts</a>
                </nav>
            </header>
            <main>{children}</main>
            <footer style={{ marginTop: "20px", textAlign: "center" }}>
                <p>&copy; 2024 Static Site Project</p>
            </footer>
        </div>
    );
}
