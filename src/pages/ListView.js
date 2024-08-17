import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postService';
import { Link } from 'react-router-dom';


const ListView = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(response => setPosts(response.data));
    }, []);

    return (
        <div className="container">
            <h1>Blog Posts</h1>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListView;
