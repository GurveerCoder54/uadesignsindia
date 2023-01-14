import React from "react";

const Cart = ({title ,src ,price})=>{
    return(
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"100%",textAlign:"center"}}>
      
        <article class="dt w-100 bb b--white-30 pb2 mt2 bg-transparent" href="#0" style={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"10vw"}}>
        <div class="dtc w2 w3-ns v-mid" style={{display:"flex",gap:"30px",alignItems:"center"}}>
          <span style={{color:"white"}}>1</span>
          <img src={src} class="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"/>
        </div>
        <div class="dtc v-mid pl3 ">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">{title} </h1>
          <h2 class="f6 fw4 mt0 mb0 black-100">{price}</h2>
        </div>
        <div class="dtc v-mid">
          <form class="w-100 tr">
            <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">Buy Now</button>
          </form>
        </div>
      </article>
  
      </div>
    )
}

export default Cart;