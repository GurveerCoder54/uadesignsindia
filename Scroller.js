import React from "react";









const imgArr=[
  {
    label:"Slide1",
    src:"https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    label:"Slide2",
    src:"https://th.bing.com/th/id/OIP.cKTq4enAGO_Wg_Omp0ysngHaEK?pid=ImgDet&w=1920&h=1080&rs=1"
  },
  {
    label:"Slide3",
    src:"https://wallpapercave.com/wp/ykgEPwd.jpg"
  },
];


let index = 0;
var timer = null;
class Scroller extends React.Component{
  constructor(props){
    super(props);
    this.state={
        src:'https://image.artistshot.com/pmd.51120585.24.723496.s3.1-front-white,2-ffffff-none-x13.206y7-153.58818-800x800.jpg',
        title:'Slide1',
        title2:''
    }
    
}

onClickSlideshow=(n)=>{
 if(n===1){
   index=index+1;
   if(index>imgArr.length-1){
     index = 0;
    }
 }
 else{
  index=index-1;
  if(index<0){
    index=imgArr.length-1
  }
 }
 this.setState({src:imgArr[index].src , title:imgArr[index].label})

}
initial = setInterval(this.onClickSlideshow , 7000)
pauseSlider=()=>{
  clearInterval(this.initial);
 this.initial = setTimeout(this.onClickSlideshow,7000);
  setTimeout(this.resumeSlider, 7000)

}
resumeSlider = ()=>{
  clearTimeout(this.initial);
  this.initial = setInterval(this.onClickSlideshow,7000);
  
}
render(){
  return(
 
     <div style={{display:"flex" , textAlign:"center" , flexDirection:"column"}}>
  
      <h1 className="black">Special Products With Special Offers</h1>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <div style={{display:"flex" , justifyContent:"center" ,textAlign:"center",flex:"1" , marginBottom:"40px",padding:"30px",flexWrap:"wrap" , border:"3px solid lightgray",borderRadius:"30px"}} className="shadow-1">
     <div className="carousel" style={{display:"flex" ,background:"white" , width:"100%",height:"100%",borderRadius:"5px",alignItems:"center"}} >
     <img src={this.state.src} height="60%" width="40%" id="slideshow-img" />
     <div style={{display:"flex" ,flexDirection:"column",justifyContent:"center"}}>
       <h1 className="black" id="title">{this.state.title}</h1>
       <p className="black">Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.</p>
       <div>
       <button className="product-btn w-40 ma3" onClick={()=>{
        this.props.productPage('product-page');
        localStorage.setItem('title',document.getElementById("title").innerHTML);
        localStorage.setItem('src',document.getElementById("slider-img").src);

        }}>Checkout</button>
       </div>
     </div>
     </div>
     <div style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"20px"}}>
      <button className="product-btn w-10" onClick={()=>{
       this.onClickSlideshow(-1)
        this.pauseSlider()
      }} >Previous</button>
      <button className="product-btn w-10" onClick={()=>{
               this.onClickSlideshow(1)

   this.pauseSlider()
      }} >Next</button>

     </div>
     </div>
     </div>
     </div>
     
    )
  }
}


{/* <!-- Carousel wrapper --> */}


export default Scroller;
