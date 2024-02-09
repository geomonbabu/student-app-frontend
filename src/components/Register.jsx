import React, { useState } from 'react'
import axios from 'axios'
import StudNav from './StudNav'

const Register = () => {
    const [input,setInput] = new useState(
        {   
            "name":"",
            "emailid":"",
            "password":"" 
        }   
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/stud/register",input).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status=="success") {
                    alert ("Submitted successfully")
                    setInput(
                        {   "name":"",
                            "emailid":"",
                            "password":"" 
        }
                    )
                        
                } else {
                    alert("Soemthing went wrong");
                }
            }
            
        )
    }
  return (
    <div>
        <StudNav />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3 className='text-dark'>Register</h3>
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name'value={input.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EmailId</label>
                            <input type="email" className="form-control" name='emailid' value={input.emailid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                        </div>
                        </div>
                    </div>
                </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-dark" onClick={readvalues}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register