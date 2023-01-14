import React from "react";
import './components.css'
const Navigation=({search , route,style})=>{
    return(
       <header className="header" style={style}>
           
        <nav  >
            <ul >
              
    
               <li onClick={()=>route('home')}>HOME</li>
                <li onClick={()=>route('t-shirts')} >PRINTED T-SHIRTS</li>
                <li onClick={()=>route('mugs')} >PRINTED MUGS</li>
                <li onClick={()=>route('custom-mugs')} >ORDER CUSTOM MUGS</li>
                <li onClick={()=>route('custom-t-shirts')} >ORDER CUSTOM T-SHIRTS</li>
                <li onClick={()=>route('signin')} >SIGN IN</li>
                <li onClick={()=>route('signin')} >CREATE ACCOUNT</li>
              <li onClick={()=>route('cart')} >MY CART</li>
             

            </ul>
        </nav>
       </header>
    )
}
export default Navigation;