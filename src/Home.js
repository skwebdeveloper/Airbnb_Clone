import React, { useState } from 'react'
import "./home.css"
import Photo from "./Photo";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import Card from "./Card";
import CardOnHome from "./CardOnHome"
import CardOnTwo from "./CardOnTwo"

function Home() {
    const history = useHistory();

    const [showSearch, setShowSearch] = useState(false) 

    return (
        <div className="home">
            <Photo />
            <div className="home__section">
            <Card 
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                des="Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day."
            />
            <Card 
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experience"
                des="Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day."
                // price="$500"
            />
            <Card 
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                des="Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day."
                // price="$600"
            />
            </div>
            
            <div className="home__second">
            <CardOnHome
                src="https://images.unsplash.com/photo-1574728435494-4134e681f687?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
            />

            <div className="home__third">
            <CardOnTwo
                src="https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1031&q=80"
                title="Villa"

            />
            <CardOnTwo
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Rental House"
            />
                        <CardOnTwo
                src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&auto=format&fit=crop&w=1047&q=80"
                title="Royal palace"
            />
            <CardOnTwo
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Kate"
            />

            </div>
            <Button onClick={() =>{
   history.push("/search")
}} variant="outlined" style={{
     backgroundColor:"white",  
     textTransform:"initial",
     padding: "16px",
     width:"20%",
     display:"flex",
     justifyContent:"center",
     margin:"0 auto"
     }}>Explore Nearby</Button>
            </div>

        </div>
    )
}

export default Home
