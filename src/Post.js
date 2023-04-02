import React,{useState,useEffect} from "react";

function Post () {
    const [posts,setPosts] =useState([])

const loadPost=()=>{

    fetch(`https://jsonplaceholder.typicode.com/posts`)
     .then(response=>response.json())
       .then(data => setPosts(data))
      
       console.log(posts)
   }

   
   useEffect(()=> {
       loadPost();
   },)
   return(
    <div>
        <h1>Post Details</h1>
        {
            posts.map((userpost)=>
            <div>
                <p>
                "userId":{userpost.userId}<br/>
                "id": {userpost.id}<br/>
                "title":{userpost.title}<br/>
                "body":{userpost.body}

                </p>
                
             </div>

            )
        }

    </div>
   )
   }

   export default Post;