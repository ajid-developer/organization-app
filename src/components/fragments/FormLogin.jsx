import InputForm from "../elements/input";
import Button from "../elements/button";
import { login } from "../../services/auth.service";
import { data } from "autoprefixer";
import { toast } from "react-toastify";

const FormLogin = () => {

    const loginHandle = (e) => {
        e.preventDefault();
        const data = {
            'email' : e.target.email.value,
            'password': e.target.password.value
        };
        login(data, (status, res) => {
            if(status) {
                localStorage.setItem('token', res.data.token);
                window.location.href = "/members";
            }
        } );
    } 

    return (
        <form onSubmit={loginHandle}>

            <InputForm type="text" label="Email" name="email" placeholder="example@gmail.com"></InputForm>
            <InputForm type="password" label="Password" name="password" placeholder="***********"></InputForm>

            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    );
}

export default FormLogin;