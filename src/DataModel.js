import React,{useEffect, useState} from "react"
import DataModelStyle from './DataModelStyle.css';
import { Link ,} from "react-router-dom";





function DataModel () {
    const [records,setRecords] =useState([])
 
  
   
    const loadData=()=>{

     fetch(`https://jsonplaceholder.typicode.com/users?id=1`)
         .then(response=>response.json())
        .then(data => setRecords(data));
        console.log(records)
    }

    
    useEffect(()=> {
        loadData();
    },)

return(
    <div>
        <table  className="table table-bordered">
            <thead>
                <tr>
                
                    <th >User ID</th>
                    <th>Company Name</th>
                    <th>Person Name</th>
                    <th>Details</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                    records.map((user)=>
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.company.name}</td>
                    <td>{user.name}</td>
                    <td>name: {user.name}<br/>
                       username:{user.username}<br/>
                       email:{user.email}<br/>
                       street:  {user.address.street}<br/>
                       suite: {user.address.suite}<br/>
                       city:{user.address.city}<br/>
                       zip code:{user.address.zipcode}<br/>
                       latitude:{user.address.geo.lat}<br/>
                       longitude{user.address.geo.lng}<br/>
                       phone: {user.phone}<br/>
                       website: {user.website}<br/>
                       catchPhrase: {user.company.catchPhrase}<br/>
                       bs:  {user.company.bs}
                     </td>
                     <td>     
                       
                     <Link to="/posts">Posts</Link><br/>
                     <Link to="/comments">Comments</Link><br/>
                     <Link to="/todos">Todos</Link><br/>
                     <Link to="/pendingtodos">Pending Todos</Link><br/>
                     <Link to="/completedtodos">Completed Todos</Link><br/>
                     <Link to="/albums">Albums</Link><br/>
                     </td>
                    </tr>
                    )}
                    </tbody>
                     </table>
                     </div>
)
}
export default DataModel;