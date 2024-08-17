import React, { useEffect, useState } from 'react';
import { fetchPostById ,deletePost, fetchPosts} from '../services/postService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DetailView = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPostById(id).then(response => setPost(response.data));
    }, [id]);

    useEffect(() => {
        fetchPosts().then(response => setPosts(response.data));
    }, []);

    const handleDelete = async (postId) => {
        try {
            await deletePost(postId); // Delete the post from the server
            setPosts(posts.filter(post => post._id !== postId)); // Remove the post from the local state
            navigate("/")
        } catch (error) {
            console.error("Failed to delete the post:", error);
        }
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="container post-detail">
            <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            </div>
            <button className='btn btn-danger' onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
};

export default DetailView;
