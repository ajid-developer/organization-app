import InputForm from "../elements/input";
import Button from "../elements/button";
import { useState } from "react";
import { registration } from "../../services/auth.service";

const FormRegister = () => {

    const registrationHandle = (e) => {
        e.preventDefault();
        const data = {
            'name' : e.target.fullname.value,
            'email' : e.target.email.value,
            'password': e.target.password.value
        };
        registration(data, (status, res) => {
            if(status) {
                localStorage.setItem('token', res.data.token);
                window.location.href = "/members";
            }
        } );
    } 

    return (
        <form onSubmit={registrationHandle}>
           <InputForm type="text" label="Fullname" name="fullname" placeholder="Achmad Muhajid SA"></InputForm>
           <InputForm type="email" label="Email" name="email" placeholder="example@gmail.com"></InputForm>
            <InputForm type="password" label="Password" name="password" placeholder="***********"></InputForm>
            
            <Button classname="bg-blue-600 w-full" type="submit">Create</Button>
        </form>
    );
}

export default FormRegister;