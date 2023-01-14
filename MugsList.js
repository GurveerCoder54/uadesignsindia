import React from "react";
import Mugs from "./Mugs.js";


const MugsList = ({products,addToCart,productPage})=>{
return(

    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>
        {
     
          products.map((mug,i)=>{
            return <Mugs  key={i} title={products[i].title} src = {products[i].src } price={products[i].price} addToCart={addToCart} productPage={productPage}  />
          })
          
    }
    </div>
    )
}
export default MugsList;