import React from 'react';
import { Link } from 'react-router-dom';
import { communityPosts } from '../data/ComunityPosts';
import './styles/Board.css'

const Board = () => {
  return (
    <section className="board-section">
        <div className='inner'>
            <h2>자유 게시판</h2>
            <table className="board-table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                    </tr>
                </thead>
                <tbody>
                    {communityPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td className="title-col">
                                <Link to={`/board/${post.id}`}>
                                    {post.title}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
  );
};

export default Board;