import React from "react";

class Signin extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      registerEmail:'',
      registerPassword:'',
      registerName:''
    }
  }
  onPasswordChange=(event)=>{
   this.setState({password:event.target.value})
  }
  onEmailChange=(event)=>{
    this.setState({email:event.target.value})
   }
   onRegisterEmailChange=(event)=>{
    this.setState({registerEmail:event.target.value})
   }
   onRegisterPasswordChange=(event)=>{
    this.setState({registerPassword:event.target.value})
   }
   onNameChange=(event)=>{
    this.setState({registerName:event.target.value})
   }
   onButtonSubmit=()=>{
    fetch('http://localhost:3002/signin',{
      method:"post",
      headers:{"Content-Type" : 'application/json'},
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    }).then(res=>res.json()).then(data=>{
       if(data.id){
        this.props.buttonsubmit('home')
       }
    })
   }
  render(){
  
    return(
        <div className="credentials " >
        <main className="signinhtmlForm  black-80" style={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:"center",alignItems:"center",padding:"14px"}}>
        <div className="measure signin shadow-1" style={{padding:"14px",width:"50%"}}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0 " style={{height:"53.5vh"}} >
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address" >Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" type="email" name="email-address"  id="email-address" onInput={this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password" >Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" type="password" name="password"  id="password" onInput={this.onPasswordChange}/>
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
          </fieldset>
          <div className="">
            <button className="b ph3 pv2 input-reset ba b--yellow bg-gold grow pointer f6 dib" type="submit" value="Sign in" style={{backgroundColor:"orangered",borderRadius:"5px" , color:"white"}} onClick={this.onButtonSubmit} >Sign In</button>
          </div>
          {/* <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Sign up</a>
            <a href="#0" className="f6 link dim black db">htmlForgot your password?</a>
          </div> */}
        </div>

              <article className=" black-80">
                <div  className="sign-up shadow-1" >
              <div style={{height:"425px",width:"100%",padding:"14px"}}>
                 <h5 style={{marginTop:"4px"}}>Sign Up</h5>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="email-address">Name</label>

                  <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="email-address"  id="name" onClick={this.onNameChange}/>
                    <label className="db pa2 fw4 lh-copy f6" htmlFor="email-address-2">Email address</label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address-2" style={{marginTop:"0px"}}  onChange={this.onRegisterEmailChange}/>
                  </div>
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password-2">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent " type="password" name="password"  id="password-2" style={{boxShadow:"0 0 0 1px black" , borderRadius:"3px"}} onChange={this.onRegisterPasswordChange}/>
                  </div>
                </fieldset>
                <div className="mt3"><button className="b ph3 pv2 input-reset ba b--white bg-red grow pointer f6" type="submit" value="Sign Up" style={{color:"white"}} onClick={()=>{
                  fetch('http://localhost:3002/registerUser',{
                    method:"post",
                    headers:{'Content-Type' : "application/json"},
                    body:JSON.stringify({
                      registerName:this.state.registerName,
                      registerEmail:this.state.registerEmail,
                      registerPassword:this.state.registerPassword
                    })
                  }).then(res=>res.json())
                  .then(data=>{
                    if(data.name){
                      this.props.buttonsubmit('home')

                    }
                  })
                  }}>Sign Up</button></div>
              </div>
              </div>
            </article>
      </main>
            </div>
    )}
}

export default Signin;