import React from 'react'

function AddComment(props) {
    return (
    <div className="row row-spacer">
        <div className="col-md-12">
            <div>
            <label>
            Add Comment: <input type="text"/>
            <button>Submit</button>
            </label>
            </div>
        </div>
    </div>
    );
    }
    export default AddComment;

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