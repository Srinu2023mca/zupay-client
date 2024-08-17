import React, { useState } from 'react';
import { createPost } from '../services/postService';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost({ title, content });
        navigate('/');
    };

    return (
        <div className="container ">
            <form onSubmit={handleSubmit} className='shadow'>
                <h1>Create New Post</h1>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;
