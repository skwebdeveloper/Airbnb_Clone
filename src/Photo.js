import React, { useState } from 'react'
import "./photo.css"
import { Button } from "@material-ui/core";
import Search from "./Search";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
AOS.init();

function Photo() {
    const history = useHistory();

    const [showSearch, setShowSearch] = useState(false) 

    return (
        <div className="photo">
        <div className="banner__search">
        <div data-aos="zoom-out" className="air__bar">
        <div className="air__barone">
        <Button style={{ textTransform:"initial" }}><h5 style={{ fontSize:"14px" }}>Location</h5></Button>
        <p>Where ..</p>
        </div>
        <div className="air__bartwo">
        <Button  style={{ textTransform:"initial" }} onClick={setShowSearch}><h5 style={{ fontSize:"14px" }}>Check in</h5></Button>
        <p>Add dates</p>
        </div>
        {showSearch && <Search />}
        <div className="air__barthree">
        <Button  style={{ textTransform:"initial" }}><h5 style={{ fontSize:"14px" }}>Check out</h5></Button>
        <p>Add dates</p>
        </div>
        <div className="air__barfour">
        <Button  style={{ textTransform:"initial" }}><h5 style={{ fontSize:"14px" }}>Guests</h5></Button> 
        <p>Add guests</p>
        </div>
        <div className="air__barfive">
        <SearchIcon onClick={() =>{
   history.push("/search")
}} style={{ borderRadius:"50%",color:"white",padding:"10px", backgroundColor:"#ff3856", cursor:"pointer" }} />
        </div>
</div> 


<div className="photo__info">
<h1>Go Near</h1>
<h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
<Button onClick={() =>{
   history.push("/search")
}} variant="outlined">Explore Nearby</Button>
</div>
</div>
</div>
    )
}
export default Photo

