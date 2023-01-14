import React from "react";
import Card from "./Card";

class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardArr:[]
        }
    }
    componentDidMount(){
    fetch('http://localhost:3002/cards')
    .then(res=>res.json())
    .then(data=>{
this.setState({cardArr:data})

    })
    if((document.getElementById(this.props.id).scrollLeft)===0){
        document.getElementById(this.props.prev).style.display="none"
    }
}


render(){

   
        return(
         
            <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>     

            <div style={{textAlign:"center"}}>
             <h1 style={{color:"black" , fontFamily:"Lexend" , fontSize:"40px" }}>Featured Products</h1>
        <div id={this.props.id} style={{display:"flex",overflowX:"scroll",gap:"20px"}}>
            {this.state.cardArr.map((card,i)=>{
                return <Card key={i} src={this.state.cardArr[i].filename + this.state.cardArr[i].id} id={this.state.cardArr[i].id} productPage={this.props.productPage}/>
            })}
        </div>
        <div style={{display:"flex" , justifyContent:"space-between" , width:"100%" }}> 
              <button className='product-btn w-10' onClick={(event)=>{
          
            //    document.getElementById(this.props.id).scrollBy(-2000,0);
                     
               document.getElementById(this.props.id).scrollBy(-2020,0);
           
                console.log((document.getElementById(this.props.id).scrollLeft))
                console.log((document.getElementById(this.props.id).offsetWidth + document.getElementById(this.props.id).scrollLeft))

            
                if((document.getElementById(this.props.id).offsetWidth + document.getElementById(this.props.id).scrollLeft)!=document.getElementById(this.props.id).scrollWidth){
               document.getElementById(this.props.next).style.display="block"
                   }
                   if((document.getElementById(this.props.id).scrollLeft)===0){
                    event.target.style.display="none"
                   }
                   

              }} style={{display:"none"}} id={this.props.prev}>Previous</button>
              <div style={{width:"100%"}}></div>
              <button className='product-btn w-10' id={this.props.next} onClick={(event)=>{
               
           
                document.getElementById(this.props.id).scrollBy(2020,0);
                console.log((document.getElementById(this.props.id).scrollLeft))
               console.log((document.getElementById(this.props.id).offsetWidth + document.getElementById(this.props.id).scrollLeft))
              if((document.getElementById(this.props.id).offsetWidth + document.getElementById(this.props.id).scrollLeft)===document.getElementById(this.props.id).scrollWidth){
                event.target.style.display="none"
              }
              if(( document.getElementById(this.props.id).scrollLeft)!==0){
                document.getElementById(this.props.prev).style.display="block"
                         }
         
                        
              }} >Next</button>

              </div>
        </div>
                 
               </div>
 )
    }
}
export default CardList;