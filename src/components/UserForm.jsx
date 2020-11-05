import React, {useState} from  'react';

const UserForm = (props) => {
    const[inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        passconfirm: ""
    });

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    const nameValid = (nameInput) => {
        if(nameInput.length > 0){
            if(nameInput.length < 2)
            return true;
        }
        return false;
    }

    const emailValid = (emailInput) => {
        if(emailInput.length > 0 ){
            if(emailInput.length < 5)
            return true;
        }
        return false;
    }
    
    const passValid = (passwordInput, passconfirmInput) => {
        if(passwordInput.length > 0 ){
            if(passwordInput.length < 8 || passwordInput !== passconfirmInput)
            return true;
        }
        return false;
    }


    return(
        <div>
            <form className="col-5 justify-content-center">
                <div className="form-group">
                    <label>First Name: </label> 
                    <input className="form-control" onChange={onChange} name="firstname" ></input>
                    {nameValid(inputs.firstname) && <p className="alert alert-danger" style={{color:"red"}}>Must be at least 2 characters</p>}
                </div>
                <div className="form-group">
                    <label>Last Name: </label> 
                    <input className="form-control" onChange={onChange} name="lastname" ></input>
                    {nameValid(inputs.lastname) && <p className="alert alert-danger" style={{color:"red"}}>Must be at least 2 characters</p>}
                </div>
                <div className="form-group">
                    <label>Email Address: </label> 
                    <input className="form-control" onChange={onChange} name="email"></input>
                    {emailValid(inputs.email) && <p className="alert alert-danger" style={{color:"red"}}>Must be at least 5 characters</p>}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input className="form-control" onChange={onChange} name="password"></input>
                    {passValid(inputs.password, inputs.passconfirm) && <p className="alert alert-danger" style={{color:"red"}}>Must be at least 8 characters and passwords must match</p>}
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input className="form-control" onChange={onChange} name="passconfirm"></input>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div className="col-5 justify-content-center">
                <h2>Form State</h2>
                <p>First Name: {inputs.firstname}</p>
                <p>Last Name: {inputs.lastname}</p>
                <p>Email: {inputs.email}</p>
                <p>Password: {inputs.password}</p>
                <p>Confirm Password: {inputs.passconfirm}</p>
            </div>
        </div>
    )
}
    
export default UserForm;