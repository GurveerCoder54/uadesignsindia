import React from "react";

const SearchBox=({placeholder,search})=>{
    return(
        <div style={{display:"flex" , justifyContent:"center"}}>
              <input placeholder={"Search " + placeholder} className=" w-50 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box" onChange={search}/>
        
        </div>
    )
}
export default SearchBox;