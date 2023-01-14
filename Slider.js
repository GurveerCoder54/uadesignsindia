import React from "react";
class Slider extends React.Component{
    constructor(){
        super();
        this.state={
            src:'https://autodius.com/wp-content/uploads/2020/05/ferrari-roma-2020-red-pictures-images.jpg',
            title:'',
            title2:''
        }
    }
    loadFunc = (data )=>{
    let index=0
    setInterval(()=>{
        index+=1;
        if(index>data.length-1){
            index=0;
        }
        else if(index<0){
            index=data.length-1
        }
      this.setState({src:data[index].src});
    //   this.setState({title:data[index].title});    
    //     this.setState({title2:data[index].title2});


    },6000)
}
componentDidMount(){
    fetch('http://localhost:3002/sliderImg')
    .then(res=>res.json())
    .then(data=>{
     this.loadFunc(data)
    
})


}



    render(){
   
    return(
        <main className="main">
            <div className="slider-container">
        <img src={this.state.src}   />
            </div>
            <div className="slider-details">
                <h1 id="titleh1"></h1>
                <h2 id="titleh2"></h2>
                <button id="checkout">CHECKOUT</button>
            </div>

        </main>
    )
    }
}

export default Slider;