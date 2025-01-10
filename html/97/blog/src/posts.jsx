import { useState, useEffect } from 'react';


export default function Posts(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [posts, setPosts] = useState();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError();
                setPosts();
                const p = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.blogId}`);
                if (!p.ok) {
                    throw new Error(`${p.status} - ${p.statusText}`);
                }
                const theposts = await p.json();
                setPosts(theposts);
            } catch (e) {
                console.error(e);
                setError(e);
            }

            setLoading(false);
        })();
    }, []);


    return (
        <> 
        {loading && <h2>loading...</h2>}
        {error && <h2>oops - failed to load blogs.</h2>}
        {posts && posts.map(p => <h2 key={p.id}>{p.title}{p.body}</h2>)}
        </>
    )
}

