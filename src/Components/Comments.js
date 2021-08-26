// import { render } from '@testing-library/react';
import React from 'react';

const Comments = ({comments, postReply}) => {

    return (
        <ul>
            {comments.map((comment, index) => <li key={index}><button onClick = {postReply(comment._id)}>Reply</button> {comment._id} Username: {comment.userName}  {comment.commentText}   
            Likes: {comment.like} Dislikes: {comment.dislike}</li>)}
        </ul>
    )
}

export default Comments;

// constructor(props) {
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