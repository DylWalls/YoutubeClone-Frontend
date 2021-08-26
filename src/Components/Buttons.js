import React, { useState } from 'react';

const LikeButton = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>
          Like {count}
        </button>&nbsp;
        <img src={window.location.origin + "/images/Like.png"} alt="Like Button" width="30" height="30"></img>&nbsp;
        <button onClick={() => setCount(count - 1)}>
          Dislike {count}
        </button>
      </div>
    );
  }

export default LikeButton;