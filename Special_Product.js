import React from "react";








var src = "https://media.customon.com/unsafe/1200x1200/img.customon.com/img/13149056/42379,14,0,0,22,157.93922486521,236.5712,36.030387567396,0,9dfa0042b0039c326db0fd7428f50a0a/merchantimagenew/elon-musk-men-s-t-shirt-green.jpg"
const imgArr=[
{
  src:'https://image.artistshot.com/pmd.51120585.24.723496.s3.1-front-white,2-ffffff-none-x13.206y7-153.58818-800x800.jpg',
  label:'Slide1',
},
  {
    label:"Slide2",
    src:"https://th.bing.com/th/id/OIP.j_9gj-iVMpuIYqCTK9eUjQHaHa?pid=ImgDet&rs=1"
  },
  {
    label:"Slide3",
    src:"https://i.etsystatic.com/19405614/r/il/d63cd8/3162063943/il_fullxfull.3162063943_s52d.jpg"
  },
  {
    label:"Slide4",
    src:"https://res.cloudinary.com/teepublic/image/private/s--M9qIM-Yw--/c_scale,h_752/c_lpad,g_north_west,h_801,w_1802,x_162,y_-15/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug%20Effect%20Coffee3%20Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug%20Effect%20Coffee3%20Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:000000/c_limit,f_auto,h_630,q_90,w_630/v1600579879/production/designs/14195519_0.jpg"
  },
];


let index = 0;
var timer = null;
let initial;
class Special_Product extends React.Component{
 
   
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
console.log("OnClick")
}
initial = setInterval(this.onClickSlideshow , 7000)
pauseSlider=()=>{
  clearInterval(this.initial);
 this.initial = setTimeout(this.onClickSlideshow,7000);
  setTimeout(this.resumeSlider, 7000)
  console.log("Pause")
}
resumeSlider = ()=>{
  clearTimeout(this.initial);
  this.initial = setInterval(this.onClickSlideshow,7000);
  console.log("Resume")
}
render(){

  return(
  
    

     <div style={{display:"flex" , textAlign:"center" , flexDirection:"column"}} >
      <h1 className="black">Elon Musk Special T-Shirts And Mugs</h1>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <div style={{display:"flex" , justifyContent:"center" ,textAlign:"center",flex:"1" , marginBottom:"40px",padding:"30px",flexWrap:"wrap" , border:"3px solid lightgray",borderRadius:"30px"}} className="shadow-1">
     <div className="carousel" style={{display:"flex" ,background:"white" , width:"100%",height:"100%",borderRadius:"5px",alignItems:"center"}} >
     <img src={this.state.src} height="40%" width="40%"  id="slider-img-2"/>
     <div style={{display:"flex" ,flexDirection:"column",justifyContent:"center"}}>
       <h1 className="black" id="title-2">{this.state.title}</h1>
       <p className="black">Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.</p>
       <div>
       <button className="product-btn w-40 ma3" onClick={()=>{
        this.props.productPage('product-page');
        localStorage.setItem('title',document.getElementById("title-2").innerHTML);
        localStorage.setItem('src',document.getElementById("slider-img-2").src);

        }}>Checkout</button>
       </div>
     </div>
     </div>
     <div style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"20px"}}>
      <button className="product-btn w-10" onClick={(event)=>{
      this.onClickSlideshow(-1);
this.pauseSlider()

      }} >Previous</button>
      <button className="product-btn w-10" onClick={(event)=>{
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


export default Special_Product;
