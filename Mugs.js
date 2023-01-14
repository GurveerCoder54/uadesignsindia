import React from "react";

const Mugs=({title , src, price , addToCart,productPage})=>{
   return(
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center bg-white h-500" style={{color:"black"}} >
    <img src={src} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc">
          <h1 className="f5 f4-ns mv0" style={{color:"blue"}}>{title}</h1>
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
      

    }}>Buy Now</button>
          <button className="product-btn" onClick={()=>addToCart(Object.assign({} , {title:title  , price : price , src:src}))}>Add To Cart</button>
    </div>
    </div>
  </article>
   )
}
export default Mugs;