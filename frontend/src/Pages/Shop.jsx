import React,{useRef} from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop=()=>{
    const latestCollectionRef = useRef(null);
    return(
        <div style={{gap:"20px"}}>
         <Hero latestCollectionRef={latestCollectionRef}/>
         <Popular/>
         <Offers/>
         <NewCollections latestCollectionRef={latestCollectionRef}/>
         <NewsLetter/>
        </div>
    )
}
export default Shop;