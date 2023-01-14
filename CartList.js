import React from "react";
import Cart from "./Cart";
import { Cart_Item_List } from "./Cart_Item_List";
const CartList =()=>{
    return(
      <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column"}}>
              <h1 style={{color:"black",}}>My Cart</h1>
        {
            Cart_Item_List.map((cart_item,i)=>{
                return <Cart  key={i} title={Cart_Item_List[i].title} price={Cart_Item_List[i].price} src={Cart_Item_List[i].src}/>
            })
        }
      </div>
    )
}
export default CartList;