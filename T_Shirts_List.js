import React, { useEffect } from "react";
import T_shirts from "./T-shirts.js";

class T_Shirts_List  extends React.Component{
constructor(props){
  super(props);
  this.state={
    products:[]
  }
}
  componentDidMount(){
    fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>{
            this.setState({products:json})
           console.log(json)
            })
  }
  
  render(){
    let {products} = this.state
return(
  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center"}}>
  

        {
     
        this.props.products.map((t_shirt,i)=>{
      return <T_shirts key={i} title={this.props.products[i].title} src = {this.props.products[i].image } price={this.props.products[i].price} addToCart={this.props.addToCart} productPage={this.props.productPage}/>
      
        })
    }
        
        
     
    </div>
 
             </div>
    )
  }
}
export default T_Shirts_List;