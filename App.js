import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import Card from './cards/Card';
import Scroller from './components/Scroller'
import Special_Product from './components/Special_Product';
import Footer from './components/Footer';
import React from 'react';
import 'tachyons'
import Signin from './components/Signin';
import T_shirts from './components/products-pages/T-shirts';
import SearchBox from './components/products-pages/SearchBox';
import Mugs from './components/products-pages/Mugs';
import T_Shirts_List from './components/products-pages/T_Shirts_List.js';
import MugsList from './components/products-pages/MugsList';
import { t_shirts } from './productsources/T-shirts-product';
import { mugs } from './productsources/Mugs_product_details';
import Cart from './components/myCart/Cart';
import { Cart_Item_List } from './components/myCart/Cart_Item_List';
import CartList from './components/myCart/CartList';
import Product_Page from './components/product-page/Product_Page';
import CardList from './cards/CardList.js'
import Custom_Mugs from './custom mugs and t-shirts/Custom_Mugs';
import Custom_Tshirts from './custom mugs and t-shirts/Custom_Tshirts';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      searchField:'',
      products:[],
      route:'home',
      placeholder:'T-Shirts',
      searchfield:'',
      cart_item_list:[]
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
  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
    console.log(event.target.value);
  }
   onButtonSubmit=(route)=>{
    this.setState({route:route})
    if(route==="mugs"){
      this.setState({products:mugs})

    }
 
   }

   onAddToCart=(obj)=>{
Cart_Item_List.push(obj)
   console.log(Cart_Item_List)
   }
   render(){
   
    const filteredProducts = this.state.products.filter(product=>{
      return product.title.toLowerCase().includes(this.state.searchfield) && product.title!==localStorage.getItem('title')
    }) 

  return(
    


  
         
  <div>
     
  
          {(() => {
  
              if (this.state.route === "home") {
  
                return (
  
                  <div>
                    <Navigation route={this.onButtonSubmit} />
                    <Slider/>
                
                   <CardList productPage={this.onButtonSubmit} id="carousel" prev="prev-btn-1" next="next-btn-1"/>
                   <CardList productPage={this.onButtonSubmit} id="carousel-2" prev="prev-btn-2" next="next-btn-2"/>
                   <CardList productPage={this.onButtonSubmit} id="carousel-3" prev="prev-btn-3" next="next-btn-3"/>
                   <CardList productPage={this.onButtonSubmit} id="carousel-4" prev="prev-btn-4" next="next-btn-4"/>
                   <CardList productPage={this.onButtonSubmit} id="carousel-5" prev="prev-btn-5" next="next-btn-5"/>


         
                  <Scroller productPage={this.onButtonSubmit}/>
                <Special_Product productPage={this.onButtonSubmit}/>

                    <Footer/>
                  </div>
  
                )
  
              } else if (this.state.route === "signin") {
  
                return (
  
                  <div><Signin buttonsubmit={this.onButtonSubmit}/></div>
  
                )
  
              } else if(this.state.route==="cart") {
  
                return (
  
                  <div style={{height:"70vh",display:"flex" , justifyContent:"center" , flexDirection:"column"}}>
                    <Navigation route={this.onButtonSubmit} style={{background:"blue" , top:"0%" , height:"130px",color:"black"}}/>
                    <CartList style={{color:"black"}} />
                  </div>
  
                )}
                else if(this.state.route==="t-shirts"){
    
                return(
                  <div>
                    <Navigation route={this.onButtonSubmit} style={{background:"blue" , top:"0%" , height:"120px",color:"black"}}/>
                    <div style={{position:"absolute" , top:"20%"}}>
                    <SearchBox search={this.onSearchChange} placeholder={this.state.placeholder}/>
                    <T_Shirts_List products={filteredProducts}  addToCart={this.onAddToCart} productPage={this.onButtonSubmit} />
                    </div>
                  </div>
                )
  
              }
              else if(this.state.route==="mugs"){
                return(
                  <div>
                    <Navigation route={this.onButtonSubmit} style={{background:"blue" , top:"0%" , height:"120px",color:"black"}}/>
                    <div style={{position:"absolute" , top:"20%"}}>
                    <SearchBox search={this.onSearchChange} placeholder={this.state.placeholder}/>
                    <MugsList products={filteredProducts} addToCart={this.onAddToCart} productPage={this.onButtonSubmit}/>
                    </div>
                  </div>
                )
              }
              else if(this.state.route==="product-page"){
               return(
                  <div>
                    <Navigation route={this.onButtonSubmit} style={{background:"blue" , top:"0%" , height:"130px",color:"black"}}/>
                   <div style={{position:"absolute" , top:"20%"}}>

                  <Product_Page products={filteredProducts}  addToCart={this.onAddToCart} productPage={this.onButtonSubmit} search={this.onSearchChange}/>
          
                  </div>
                  </div>
                )
              } 
              else if(this.state.route==="custom-mugs"){
                return(
                <div>
                  <Navigation route={this.onButtonSubmit} style={{background:"blue" , top:"0%" , height:"130px",color:"black"}}/>
             <div style={{position:'absolute' , top:"15%" , display : "flex" , justifyContent:"center" , flexDirection:"column" , alignItems:"center" , width:"100%"}}>
                  <Custom_Mugs/>
                  </div>
                  </div>
                )
              }
              else if(this.state.route==="custom-t-shirts"){
                return(<div>
                  <Navigation route={this.onButtonSubmit} style={{background:"blue" , top:"0%" , height:"130px",color:"black"}}/>

                  <div style={{position:'absolute' , top:"15%" , display : "flex" , justifyContent:"center" , flexDirection:"column" , alignItems:"center" , width:"100%"}}>
                  <Custom_Tshirts/>
                  </div>
                  </div>
                )
              }
       
  
          })()}
  
     
  
  </div>
  
    );
  
  }
  }
  
  
  
  


export default App;
