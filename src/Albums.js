import React,{useState,useEffect} from "react";

function Albums () {
    const [albums,setAlbums] =useState([])

const loadAlbum=()=>{

    fetch(` https://jsonplaceholder.typicode.com/albums`)
     .then(response=>response.json())
       .then(data => setAlbums(data))
      
       console.log(albums)
   }

   
   useEffect(()=> {
       loadAlbum();
   },)
   return(
    <div>
        <h1>Albums Details</h1>
        {
            albums.map((useralbum)=>
            <div>
                <p>
                "userId":{useralbum.userId}<br/>
                "id": {useralbum.id}<br/>
                "title":{useralbum.title}<br/>
            </p>
                
             </div>

            )
        }

    </div>
   )
   }

   export default Albums;