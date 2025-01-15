import { useState, useEffect } from 'react';


export default function Comments(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [comments, setComments] = useState();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError();
                setComments();
                const c = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`);
                if (!c.ok) {
                    throw new Error(`${c.status} - ${c.statusText}`);
                }
                const thecomments = await c.json();
                setComments(thecomments);
            } catch (e) {
                console.error(e);
                setError(e);
            }

            setLoading(false);
        })();
    }, [props.postId]);


    return (
        <> 
        {loading && <h2>loading...</h2>}
        {error && <h2>oops - failed to load blogs.</h2>}
        {comments && comments.map(c => <h2 key={c.id}>{c.body}</h2>)}
        </>
    )
}

