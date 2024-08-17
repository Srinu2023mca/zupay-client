import React, { useEffect, useState } from 'react';
import { fetchPostById ,deletePost, fetchPosts} from '../services/postService';
import { useParams,useNavigate,Link } from 'react-router-dom';

 
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
        <div className="container post-detail w-75 shadow ">
            <div >
            <h1>{post.title}</h1><hr/>
            <div className='content-window'>
            <p >{post.content}</p>
            </div>
            
            <hr/>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <Link to={`/posts/${id}/edit`} className="btn btn-primary">Update</Link>
            <button className='btn btn-danger' onClick={() => handleDelete(id)}>Delete ❌</button>

            </div>
        </div>
    );
};

export default DetailView;
