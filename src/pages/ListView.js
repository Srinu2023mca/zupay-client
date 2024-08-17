import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postService';
import { Link } from 'react-router-dom';


const ListView = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(response => setPosts(response.data));
    }, []);

    

    return (
        <div className="container p-3 border rounded bg-light shadow w-75 bg-info d-flex align-items-center justify-content-center">
            <div className='w-100'>
            <h1>Blog Posts</h1>
            <div className="post-list">
                {posts.map(post => (
                    <Link key={post._id} className='text-decoration-none fs-4 form-control mb-2 text-primary ' to={`/posts/${post._id}`}>{post.title}</Link>
                ))}
                
            </div>
            </div>
        </div>
    );
};

export default ListView;
