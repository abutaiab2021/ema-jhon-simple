import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    // console.log('came from',location.state?.from)

    const handleGooglLogin = () =>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className="login-form">
            <div >
                <h2>Login</h2>
                <form >
                    <input type="email" name="" placeholder="your email" id="" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to ema-jhon website? <Link to="/register">Create Account</Link></p>
                <div>-------------or----------------</div>
                <button 
                className="btn btn-regular" 
                onClick={handleGooglLogin}
                >Google Sign In</button>

            </div>
        </div>
    );
};

export default Login;