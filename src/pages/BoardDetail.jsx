import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { communityPosts } from '../data/ComunityPosts';
import './styles/BoardDetail.css'

const BoardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = communityPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <div className='inner'>존재하지 않는 게시글입니다.</div>;
  }

  return (
    <div className='inner'>
        <div className='board-detail'>
            <h2>{post.title}</h2>
            <p className='p_id'>
                게시글 번호: {post.id}
            </p>
            <div className='p_content'>
                {post.content}
            </div>
        </div>
        
        <button className='bd-btn' onClick={() => navigate('/board')}>
            목록으로
        </button>
    </div>
  );
};

export default BoardDetail;