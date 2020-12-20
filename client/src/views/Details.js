import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import {Link , navigate } from "@reach/router";

export default(props)=> {
    const {id} =props;
    const [name , setName] = useState("");
    const [type , setType] = useState("");
    const [description, setDescription] = useState("");
    const[mileage , setMileage] = useState("");
    const[year , setYear] = useState("");
    const[color , setColor] = useState("");
    
useEffect(()=>{
    axios.get("http://localhost:8000/cars/"+ id)
    .then(res =>{
        setName(res.data.name)
        setType(res.data.type)
        setDescription(res.data.description)
        setMileage(res.data.mileage)
        setYear(res.data.year)
        setColor(res.data.color)
        
    })
    .catch(err => console.log(err));

},[])




    return(
        <div style={{backgroundColor: "#062134"}} className="container" >
            
            
            <h1 style={{color: "white"}} >CarAsh Renter</h1>
    <h3 style={{color: "white"}} >Details about: {name}</h3> 
    
    <DeleteButton carId={id}  onSuccess={()=> navigate("/") }carName={name}  />
    <div >
    <p style={{color: "white"}}>Car type: </p>
    <div class="alert alert-primary" role="alert">{type}</div>
    <p style={{color: "white"}}>Description: </p>
    <div class="alert alert-primary" role="alert">{description}</div>
    <p style={{color: "white"}}>Mileage: </p>
    <div class="alert alert-primary" role="alert">{mileage}</div>
    <p style={{color: "white"}}>Year Of built: </p>
    <div class="alert alert-primary" role="alert">{year}</div>
    <p style={{color: "white"}}>Color: </p>
    <div class="alert alert-primary" role="alert">{color}</div>
     


    </div>
            
    <Link to="/">Back to home   </Link>
            </div>
    )
}