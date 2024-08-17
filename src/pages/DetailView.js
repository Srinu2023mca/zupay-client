import React, { useEffect, useState } from 'react';
import { fetchPostById } from '../services/postService';
import { useParams } from 'react-router-dom';


const DetailView = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetchPostById(id).then(response => setPost(response.data));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="container post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default DetailView;
