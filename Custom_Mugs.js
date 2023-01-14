import React from "react";

const Custom_Mugs=()=>{
    return(
        <main class="pa4  w-100" >
  <div class="  w-100" style={{display:"flex" ,flexDirection:"column",alignItems:"center" , textAlign:"center"}} >
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Details Form For Custom Mug Design</legend>
      <div class="mt3 " style={{display:"flex" , justifyContent:"center" , flexDirection:"column" , gap:"30px"}}>

        
        <input class="pa2 input-reset ba  bg-white hover-bg-black w-100" type="text" name="text"  id="name" placeholder="Enter Your Name"/>

        <input class="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="address"  id="address" placeholder="Enter Your Home Address"/>
      
        <input class=" pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="text"  id="text" placeholder="Enter Your Mobile Number"/>

        <input class="pa2 input-reset ba bg-transparent hover-bg-black w-100 " type="text" name="text"  id="design-text" placeholder="Enter The Text For Your Design"/>

        <input class="pa2 input-reset ba bg-transparent hover-bg-black w-100 " type="text" name="text"  id="color" placeholder="Enter The Color For Your Mug" />

        <input class="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="text"  id="src"  placeholder="Enter The Url Of Your Favourite Image"/>


        
                      <h5>Or</h5>
                  <span>Choose Files From Your Device :  </span>    
                  <input class="pa2 input-reset ba bg-transparent hover-bg-black " type="file" name="text"  id="file" placeholder="Enter The Text For Your Design"/>
                <div> <span>Quantity:</span>   <select> 
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option>
                 <option>6</option>
                 <option>7</option>

                 
                  </select>
                  </div>

                <span>Choose The Size Of Your Mug : <select>

                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>

                    </select></span>
      </div>
      <div class="mv3">
      </div >

    </fieldset>
    <div class="">
      <input class="b ph3 pv2 input-reset white ba b--white bg-yellow grow pointer f6 dib" type="submit" value="Submit"/>
    </div>
  
  </div>
</main>

    )
}

export default Custom_Mugs;