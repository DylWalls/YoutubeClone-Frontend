import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddComment from './Comments';
import './App.css';

const App = (props) => {
    const [youtubeVideos, setYoutubeVideos] = useState({});

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?q={mern stack}&key={./key}`)
            .then(response => setYoutubeVideos(response.data[props.index])
        )}, [youtubeVideos, props.index]);
    }

    handleChange(e){
        this.setState ({
          addComment: e.target.value
        });
    
    submit = (e) => {
        e.addComment();
    }

    return (
        // <div>
        //     <h1>{youtubeVideos.title}</h1>
        // </div>
        <div>
            <AddComment />
        </div>
    );
}

export default App;
// export default Videos;
