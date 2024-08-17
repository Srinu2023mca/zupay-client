import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostById, updatePost } from '../services/postService';

const UpdatePost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchPostById(id).then(response => {
            setTitle(response.data.title);
            setContent(response.data.content);
        });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePost(id, { title, content });
            console.log(title, content)
            navigate("/");
        } catch (error) {
            console.error('Failed to update the post:', error);
        }
    };

    return (
        <div className="container">
            
            <form onSubmit={handleSubmit} className='shadow'>
                <h3 className='mb-3'>Update Post</h3>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    required
                />
                <button type="submit" className="btn btn-primary">Update Post</button>
            </form>
        </div>
    );
};

export default UpdatePost;
