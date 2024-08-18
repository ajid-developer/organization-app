import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = (props) => {
    return (
    <AuthLayout title="Register" type="register">
        <FormRegister />
    </AuthLayout>
    );
};

export default RegisterPage;