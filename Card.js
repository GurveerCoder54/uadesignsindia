import React from "react";

const Card = ({productPage , src , id})=>{
    return(
        <div style={{ }} className="card-row-container">
         
             <div className="card ">
              <img src={src} height="50%"/>
              <p className="black">{id}</p>
              <button onClick={()=>{
                productPage('product-page');
                localStorage.setItem("title",id);
                localStorage.setItem("src",src);

              }}>Buy Now</button>
             </div>
   

        </div>
    )
}
export default Card;