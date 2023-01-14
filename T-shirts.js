import React from "react";

const T_shirts=({title , src , price,addToCart,productPage})=>{
   return(
 
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center bg-white " style={{color:"black" , display:"flex" , flexDirection:"column"}} >
    <img src={src} ass="db w-100 br2 br--top" alt="Loading Image" height="50%"/>
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc">
          <h1 className="f5 f4-ns mv0" style={{color:"blue",fontSize:"15px"}}>{title}</h1>
        </div>
        <div className="dtc tr" >
          <h2 className="f5 mv0" style={{color:"blue"}}>{price}</h2>
        </div>
      </div>
    
      <div className="" style={{display:"flex" , flexDirection:"column",justifyContent:"center"}}>
      <button className="product-btn" onClick={()=>{
        productPage("product-page");
        localStorage.setItem('title',title);
        localStorage.setItem('src',src);
        localStorage.setItem('price',price);
       window.scrollTo(0,0)

    }}>Buy Now</button>
          <button className="product-btn" onClick={()=>addToCart(Object.assign({},{title:title , src:src , price : price}))}>Add To Cart</button>
    </div>
    </div>
  </article>
 
   )
}
export default T_shirts;