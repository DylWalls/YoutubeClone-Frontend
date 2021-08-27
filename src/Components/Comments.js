// import { render } from '@testing-library/react';
import React from 'react';

const Comments = ({comments, postReply, getVideo}) => {

    return (
        <ul className="ul">
            {comments.map((comment, index) => {
            return(
            <li key={index}>
                {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={getVideo(comment._id)}
                frameborder="0"></iframe><br></br>  */}
                 {comment._id} 
                Username: {comment.userName}<br></br>
                  {comment.commentText}<br></br>   
                Likes: {comment.like}&nbsp;&nbsp; 
                Dislikes: {comment.dislike} 
                &nbsp;&nbsp;<button onClick = {() => postReply(comment._id)}>Reply</button>
                <ul>
                    {comment.replies.map((reply, index) => <li key={index}>{reply.replyText}</li>)}
                </ul>
                <br></br>
            </li>
            )
        })}    
        </ul>
    )
}

export default Comments;

// constructor(props) 
//     super(props);
//     this.addComment = this.addComment.bind(this);
// }

// addComment() {
//     console.log('Comment Added');
// }

//     render() {
//     return (
//     <div className="row row-spacer">
//         <div className="col-md-12">
//             <div>
//             <label>
//             Add Comment: <input type="text"/>
//             <button onClick={this.addComment}>Submit</button>
//             </label>
//             </div>
//         </div>
//     </div>
//         );
//     }
// }
//     export default AddComment;

// export const AddComment= () => {

//     var [name,setName]=useState()
    
//     const commentUpdate=(event)=>{
//         setName(event.target.value)
//     }

//     return (
//         <div>
//             <form>
//                 <label>Comment:</label>
//                 <input required onChange={commentUpdate}></input>
//                 <button type="submit"> Submit</button>
//             </form>
//         </div>
//     )   
// }

// export default AddComment