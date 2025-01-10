import { useState, useEffect } from 'react';
import Posts from './posts'

export default function BlogList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [blogs, setBlog] = useState([]);
    const [postsId, setPosts] = useState();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError();
                setBlog();
                const b = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!b.ok) {
                    throw new Error(`${b.status} - ${b.statusText}`);
                }
                const theblogs = await b.json();
                setBlog(theblogs);
            } catch (e) {
                console.error(e);
                setError(e);
            }

            setLoading(false);
        })();
    }, []);

    const test = (id) =>{
        setPosts(id)
        console.log(id)
    }



    return (
        <>
            {loading && <h2>loading...</h2>}
            {error && <h2>oops - failed to load blogs.</h2>}
            {blogs && blogs.map(b => <h2 key={b.id}onClick={()=>{test(b.id)}}>{b.name}{b.username}{b.company.name}</h2>)}
            {postsId && <Posts blogId={postsId}/>}
        </>
    )
}
