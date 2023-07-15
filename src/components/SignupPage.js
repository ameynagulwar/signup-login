import React,{useState} from "react"


const SignupPage = () =>{
   
    let [users,setSignup] = useState({fname:"",email:"",password:"",cnfpassword:""})
    let [error,setError] = useState("")
    let [success,setSuccess] = useState("")
    

    function validateForm(event){
         event.preventDefault()
        if(users.fname.length < 3){
          setSuccess("")
          return setError("Name should have minimum 3 charcters...!!!")
        }
        if(!users.email.includes('@') || !users.email.includes('.')){
            setSuccess("")
            return setError("Email should containes . & @...!!!")
        }
        if(users.password.length < 8 || users.password.length > 15){
            setSuccess("")
            return setError("Password Should conatines minimun 8 & maximum 15 charcters...!!!")
        }
        if(users.password !== users.cnfpassword){
            setSuccess("")
            return setError("Please make sure your Password & Confirm Password match...!!!")
        }
        setSuccess("user SignUp Successfully....!!!")
        setError("")
    }

    return(
         
        <div className="container">
            <div className="image">
                <img src={require("../assets/image.png")} alt="logo"/>
                
            </div>
            <div className="form">
                <form onSubmit={validateForm}>
                    <div className="try">
                     <h1>Create Account</h1>
                     <div className="mini-logo">
                        <div className="mini">
                        <img src={require("../assets/search 1.png")} alt="google-logo"/>
                        <span>SignUp with Google</span>
                        </div>
                        <div className="mini">
                        <img src={require("../assets/facebook 1.png")} alt="facebook-logo"/>
                        <span>SingUp with Facebook</span>
                        </div>
                     </div>
                     <h3>-OR-</h3>
                     <input type="text" placeholder="Full Name" onChange={(event) => setSignup({...users,fname : event.target.value})}/>
                     <input type="email" placeholder="Email Address"  onChange={(event) => setSignup({...users,email : event.target.value})}/>
                     <input type="password" placeholder="Password" onChange={(event) => setSignup({...users,password : event.target.value})}/>
                     <input type="password" placeholder="Confirm Pasword" onChange={(event) => setSignup({...users,cnfpassword : event.target.value})}/>
                     <button>Create Account</button>
           {
                error!=="" && <p className="err">Error: {error}</p>
           }
           {
               success && <p className="succ">Congratalution: {success}</p>
           }
                   </div>
               </form>
            </div>
        </div>
    )
}


export default SignupPage;