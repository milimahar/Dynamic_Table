import React,{useState,useEffect} from "react";

function Comments() {
    const [comments,setComments] =useState([])

const loadComment=()=>{

    fetch(`https://jsonplaceholder.typicode.com/comments`)
     .then(response=>response.json())
       .then(data => setComments(data))
      
       console.log(comments)
   }

   
   useEffect(()=> {
       loadComment();
   },)
   return(
    <div>
        <h1>Comments Details</h1>
        {
            comments.map((usercomment)=>
            <div>
                <p>
                "postId":{usercomment.postId}<br/>
                "id": {usercomment.id}<br/>
                "name":{usercomment.name}<br/>
                "email":{usercomment.email}
                "body":{usercomment.body}
              </p>
                
             </div>

            )
        }

    </div>
   )
   }

   export default Comments;