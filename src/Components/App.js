import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments';
import LikeButton from './Buttons';
import {APIKEY} from '../key/key';
import './App.css';

const App = (props) => {
    // const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [currentVideo, setCurrentVideo] = useState('');
    
    // useEffect(() => {
        //     axios.get(`https://www.googleapis.com/youtube/v3/search?q=mernstack&key=${APIKEY}`)
        //         .then(response => setYoutubeVideos(response.data[props.index])
        //     )}, [youtubeVideos, props.index]);
        // }
        
        // useEffect(() => {
        //     axios.post('http://localhost:5000/api/comments', {
        //         commentText: "This is React-2",
        //     })
        //     .then((response) => console.log(response.data))
        //     .catch((error) => console.log(error))
        // },[handleSubmit]);


        // const getVideo = () => {
        //     axios.get('https://www.youtube.com/3GoPARKGP-8', {
        //         videoId: "3GoPARKGP-8",
        // })
        //     .then((response) => setYoutubeVideos(response.data.items[3].videoId))
        //     .catch((error) => console.log(error))
        // }

        const postComment = () => {
            axios.post('http://localhost:5000/api/comments', {
                userName: "Anonymous",
                commentText: "This is a comment by Anonymous Mark",
                like: 0,
                dislike: 0,
            })
            .then((response) => setComments(response.data))
            .catch((error) => console.log(error)) 
        }

        const getVideo = (cid) => {
            axios.get(`https://www.googleapis.com/youtube/v3/search?q=mernstack&key=${APIKEY}`,{
            videoId: "3GoPARKGP-8",
        })
            .then((response) => (response.data.items))
            .catch((error) => console.log(error))
        }
        
        const runSearch = () => {
            axios.get(`https://www.googleapis.com/youtube/v3/search?q=mernstack&key=${APIKEY}`)
        
            .then((response) => {
            console.log(response);
            setSearchResults(response.data.items)
        })
            .catch((error) => console.log(error))
            console.log('searchResults:', searchResults)
        }
        
        const putComment = (cid) => {
            axios.put(`http://localhost:5000/api/comments/${cid}`)
            .then((response) => (response.data))
            .catch((error) => console.log(error))
        }

        const postReply = (cid) => {
            axios.post(`http://localhost:5000/api/comments/${cid}`,{
            replyText: "This is a reply."
        })
            .then((response) => (response.data))
            .catch((error) => console.log(error))
        }

        useEffect(() => {
            runSearch();
        }, [])
        

        useEffect(() => {
            // runSearch();
           axios.get('http://localhost:5000/api/comments')
                .then((response) => setComments(response.data))
                .catch((error) => console.log(error))
        },[postComment, putComment, postReply, getVideo]); 

    return (
        // <div>
        //     <h1>{youtubeVideos.title}</h1>
        // </div>
        <div>
            <h1 className="main-title">YooToob</h1>
            <Comments comments={comments} postReply = {postReply} getVideo={getVideo}/>
            <LikeButton /><br></br>
            <button onClick={postComment}>Click Me to Post New Comment</button>
        </div>
    );
}

export default App;
// export default Videos;
