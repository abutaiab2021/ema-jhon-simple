import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register : Create account</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="Your Email" id="" />
                    <br />
                    <input type="password" placeholder="Password" name="" id="" />
                    <br />
                    <input type="password" placeholder="Re-enter Password" name="" id="" />
                    <br />
                    <input type="submit" value="Sumnit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>------------or---------------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;