import React from "react";
import T_Shirts_List from "../products-pages/T_Shirts_List.js";
import MugsList from "../products-pages/MugsList.js";

let count = 0;
const elementToRemove = {
       title:localStorage.getItem('title'),
       src:localStorage.getItem('src')
}
console.log(elementToRemove)
const Product_Page = ({addToCart,products,productPage,search})=>{
    function setSrc(target , src){
       
        document.querySelector("#product-img").src = src
        localStorage.setItem('src',src);
        localStorage.setItem('target',target)


      
    }
    function setSrcAll(target , src){
setSrc(target , src)
  elementToRemove.title = target.innerHTML;
  elementToRemove.src = src;
  console.log("eleemnt",elementToRemove)
   
}
    return (
        <div style={{color:"black"}}>
        <div style={{margin:"20px",display:"flex" , justifyContent:"center",textAlign:"center"}}>
            <img src={localStorage.getItem('src')} height="500px" width="600px" id="product-img"/>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <h3 style={{fontSize:"50px"}} id="title">{localStorage.getItem('title')}</h3>
      <p style={{color:"black"}}>The Lamborghini Urus is a high performance full-size luxury crossover SUV manufactured by Italian automobile manufacturer Lamborghini. It was unveiled on 4 December 2017 and was put on the market for the 2018 model year.</p>
<div>
    <img src="https://img.icons8.com/emoji/512/star-emoji.png" height="30px"/>
    <img src="https://img.icons8.com/emoji/512/star-emoji.png" height="30px"/>
    <img src="https://img.icons8.com/emoji/512/star-emoji.png" height="30px"/>
    <img src="https://img.icons8.com/emoji/512/star-emoji.png" height="30px"/>
    

</div>
          <h6>Price : $8.00</h6>
          <div style={{display:"flex",gap:"10px" , justifyContent:"center",margin:"10px",alignItems:"center"}}>
          <h6>Select Size : </h6>
            <button style={{border:"2px solid lightgray",height:"50px",width:"50px",cursor:"pointer"}} className="onhover">S</button>
            <button style={{border:"2px solid lightgray",height:"50px",width:"50px",cursor:"pointer"}} className="onhover">M</button>
            <button style={{border:"2px solid lightgray",height:"50px",width:"50px",cursor:"pointer"}} className="onhover">L</button>
            <button style={{border:"2px solid lightgray",height:"50px",width:"50px",cursor:"pointer"}} className="onhover">XL</button>
            <button style={{border:"2px solid lightgray",height:"50px",width:"50px",cursor:"pointer"}} className="onhover">XXL</button>
            <button style={{border:"2px solid lightgray",height:"50px",width:"50px",cursor:"pointer"}} className="onhover">XXL</button>


          </div>
          <div style={{display:"flex" , justifyContent:"center",flexDirection:"row",gap:"15px",alignItems:"center"}}>
          <button style={{border:"2px solid lightgray",height:"50px",width:"50px",cursor:"pointer"}} onClick={()=>{
              let span = document.getElementById("quantity");
            
              span.innerHTML=Number(span.innerHTML)+1
              if(span.innerHTML==="11"){
               span.innerHTML=1;
              }
              }} className="onhover">+</button>
          <span style={{border:"2px solid lightgray" ,textAlign:"center" , display:"flex" , justifyContent:"center",width:"50px",height:"50px",alignItems:"center",cursor:"pointer"}} id="quantity">1</span>
          <button style={{border:"2px solid lightgray",width:"50px",height:"50px"}}onClick={()=>{
              let span = document.getElementById("quantity");
              span.innerHTML=Number(span.innerHTML)-1;
              if(span.innerHTML==="0"){
                     span.innerHTML=10;
                    }
                    console.log(elementToRemove)
              }} className="onhover">-</button>
      
          
          <button className="product-btn" onClick={addToCart} style={{height:"50px",width:"120px",cursor:"pointer"}} >Add To Cart</button>
          <button className="product-btn" style={{height:"50px",width:"120px",cursor:"pointer"}} >Buy Now</button>
        
          </div>
            </div>

        </div>
        <div style={{display:"flex" ,marginLeft:"30px",flexDirection:"row",gap:"15px" , cursor:"pointer"}} className="img-container">
        <img src="https://th.bing.com/th/id/R.c4f8fb8fb471bd289e0efef29e216fff?rik=VjQXwS68RpZc0w&riu=http%3a%2f%2fperformancedrive.com.au%2fwp-content%2fuploads%2f2017%2f12%2f2018-Lamborghini-Urus-yellow-1280x917.jpg&ehk=wVWAXGnEp%2b5Nc8yZ%2b3ms%2bE8Lh0IX%2fx%2f%2bE1TSylMHbqg%3d&risl=&pid=ImgRaw&r=0" height="100px" width="150px"  onClick={(event)=>{
 setSrcAll(event.target ,event.target.src)
    
       
        }}/>
        <img src="https://topgear.com.my/sites/default/files/icon/hennessey-hpe750-urus-3.jpg" height="100px" width="150px" onClick={(event)=>{
 setSrcAll(event.target , event.target.src)
   
       
        }}/>
        <img src="https://th.bing.com/th/id/OIP.E4rMGw5bBNO62pAGMcz_oQHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" height="100px" width="150px" onClick={(event)=>{
 setSrcAll(event.target,event.target.src)
    
       
        }}/>
        <img src="https://th.bing.com/th/id/OIP.L0OP7T5tSjquVs_6I-HTsAHaE8?w=274&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7" height="100px" width="150px" onClick={(event)=>{
 setSrcAll(event.target,event.target.src)
    
       
        }}/>
        <img src="https://th.bing.com/th/id/OIP.GyqYSFqkVeNysBfhQUBBdAHaEK?w=266&h=180&c=7&r=0&o=5&pid=1.7" height="100px" width="150px"  onClick={(event)=>{
 setSrcAll(event.target,event.target.src)
    
       
        }}/>
        <img src="https://th.bing.com/th/id/OIP.f9zaGNx6qxv_1noMOjVYfAHaE8?w=274&h=182&c=7&r=0&o=5&pid=1.7" height="100px" width="150px" onClick={(event)=>{
 setSrcAll(event.target,event.target.src)
    
       
        }}/>

        <img src="https://th.bing.com/th/id/OIP.f9zaGNx6qxv_1noMOjVYfAHaE8?w=274&h=182&c=7&r=0&o=5&pid=1.7" height="100px" width="150px" onClick={(event)=>{
 setSrcAll(event.target.src)
    
       
        }}/>
        <img src="https://th.bing.com/th/id/OIP.f9zaGNx6qxv_1noMOjVYfAHaE8?w=274&h=182&c=7&r=0&o=5&pid=1.7" height="100px" width="150px" onClick={(event)=>{
 setSrcAll(event.target.src)
    
       
        }}/>

        </div>
        <div>

        </div>
        <div className="black flex justify-center ma5" style={{flexDirection:"column" , textAlign:"center"}}>
        <h1 className="black">More Products</h1>
        <div style={{display:"flex" , justifyContent:"center"}}>
              <input placeholder={"Search "} className=" w-50 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box" onChange={search}/>
        
        </div>
       
        <T_Shirts_List products={products}  addToCart={addToCart} productPage={productPage} elementToRemove={elementToRemove} />
      

        </div>
        </div>
    )
}

export default Product_Page;