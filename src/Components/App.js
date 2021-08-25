import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments';
import {APIKEY} from '../key/key';
import './App.css';

const App = (props) => {
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [comments, setComments] = useState([]);

    // const DUMMY_ARRAY = ['Cat', 'Dog', 'Mouse']


    
    
    // useEffect(() => {
        //     axios.get(`https://www.googleapis.com/youtube/v3/search?q=mernstack&key=${APIKEY}`)
        //         .then(response => setYoutubeVideos(response.data[props.index])
        //     )}, [youtubeVideos, props.index]);
        // }
        
        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     console.log(e);
        // }
        
        // useEffect(() => {
        //     axios.post('http://localhost:5000/api/comments', {
        //         commentText: "This is React-2",
        //     })
        //     .then((response) => console.log(response.data))
        //     .catch((error) => console.log(error))
        // },[handleSubmit]);
        
        
        const postComment = () => {
            axios.post('http://localhost:5000/api/comments', {
                commentText: "This is React-2",
            })
            .then((response) => setComments(response.data))
            .catch((error) => console.log(error)) 
        }
        
        useEffect(() => {
           axios.get('http://localhost:5000/api/comments')
                .then((response) => setComments(response.data))
        },[postComment]); 
        

        // const CommentUpdate = () => {
        
        // }
        

    // handleChange(e){
    //     this.setState ({
    //       addComment: e.target.value
    //     });
    
    // submit = (e) => {
    //     e.addComment();
    // }

    return (
        // <div>
        //     <h1>{youtubeVideos.title}</h1>
        // </div>
        <div>
            <Comments comments={comments}/>
                <button onClick={postComment}>Click Me to Post New Comment</button>
        </div>
    );
}

export default App;
// export default Videos;
