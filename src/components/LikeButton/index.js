import React from 'react';

export default function LikeButton({ handleClick, liked}) {
    return (
        <span className="like-btn" style={{color: `${liked ? "red" : "white"}`}}onClick={handleClick} >
            Love
        </span>
    )
}