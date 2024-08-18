import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
    return (
    <AuthLayout title="Login" type="login">
        <FormLogin />
    </AuthLayout>
    );
};

export default LoginPage;