import React, { useState } from 'react'

const Register = () => {

    const intialValues = {
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        phoneno:""
    }

    const [values, setValues] = useState(intialValues);
    const handleInputChange = (e) => 
    {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSumbit = (e) =>
    {
        e.preventdefault();
        alert(values);
    };
    
    return (
        <div class = "container">

            <form onSubmit = {handleSumbit}>
                    <div class = "row">
                        <div class = "col">

                                <div class="mb-3">
                                    <label  class="form-label">First Name</label>
                                    <input class="form-control"
                                     name = "firstname"
                                     value = {values.firstname}
                                     onChange = {handleInputChange} 
                                     placeholder = "First Name"/>
                                    
                                </div>
                            </div>
                            <div class = "col">    
                                <div class="mb-3">
                                    <label class="form-label">Last Name</label>
                                    <input class="form-control"
                                     name = "lastname"
                                     value = {values.lastname} 
                                     onChange = {handleInputChange} 
                                     placeholder = "Last Name" />
                                </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email address</label>
                        <input  class="form-control" 
                         name = "email"
                         value = {values.email} 
                         onChange = {handleInputChange} 
                         id="exampleInputEmail1" 
                         aria-describedby="emailHelp"
                         placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type = "password" 
                         name = "password" 
                         class="form-control" 
                         value = {values.password} 
                         onChange = {handleInputChange}
                         placeholder="Enter password"/>
                    </div>
                    {/* <div class="form-group">
                        <label>Nationality</label>
                        <input  class="form-control"   placeholder="Enter nationality"/>
                    </div> */}
                    <div class="form-group">
                        <label>Phone No.</label>
                        <input  class="form-control"
                         name = "phoneno"
                         value = {values.phoneno} 
                         onChange = {handleInputChange}   
                         placeholder="Enter your phone number"/>
                    </div>            
                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}

export default Register
