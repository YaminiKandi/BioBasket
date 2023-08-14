import React, { useState } from "react";
import classes from './Login.module.css'
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'
import cross from '../assets/cross2.png'
import {useUserAuth} from '../context/UserAuthContext'

const Login = ({onClose}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    const [numError, setNumError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [otp, setOtp] = useState('')
    const [otpError, setOtpError] = useState('')
    const [showOtpVerifier, setShowOtpVerifier] = useState(false)
    const {logIn, googleSignIn, logInWithNum} = useUserAuth();

    const handleNumSubmit = async (event) => {
        event.preventDefault();
        setNumError('')
        try{
            await logInWithNum(number)
        } catch (err) {
            setNumError(err.message)
        }
    }

    const handleOtpSubmit = async (event) => {
        event.preventDefault();
        setOtpError('')
        try {
            const verificationId = ''
            await logInWithNum(verificationId, otp)
        } catch (err) {
            setOtpError(err.message)
        }
    }

    const handleOtpVerifier = () => {
        setShowOtpVerifier(!showOtpVerifier)
    }

    const handleEmailSubmit = async (event) => {
        event.preventDefault();
        setEmailError('')
        try{
            await logIn(email, password)

        } catch (err) {
            setEmailError(err.message)
        }
    }
    const handleGoogleSignIn = async (event) => {
        event.preventDefault();
        try{
            await googleSignIn();
        } catch (err) {
            setEmailError(err.message)
        }
    }
    const handleCrossClick = () => {
        onClose()
    }
    return(
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.form}>
                    <button className={classes.buttonCross} onClick={handleCrossClick}>
                        <img src={cross} alt="cross-icon" className={classes.crossIcon} />
                    </button>
                    <div className={classes.loginHeader}>
                        <img src={logo} alt="logo" className={classes.logo}/>
                        <h1>BioBasket</h1>
                    </div>
                    <div className={classes.loginWrapper}>
                        <div className={classes.login}>
                            <h3>Login using OTP</h3>
                            <form className={classes.loginForm} onSubmit={handleNumSubmit}>
                                {numError && (
                                    <div>{numError}</div>
                                )}
                                <input 
                                    type="text" 
                                    placeholder="Mobile Number"
                                    onChange={(event) => setNumber(event.target.value)}
                                ></input>
                                {!showOtpVerifier && <button className="btn1" onClick={handleOtpVerifier}>Get OTP</button> }
                            </form>
                            {showOtpVerifier && (
                                <form className={classes.loginForm} onSubmit={handleOtpSubmit}>
                                    {otpError && (
                                        <div>{otpError}</div>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="OTP"
                                        onChange={(event) => setOtp(event.target.value)}
                                        className={classes.otp}
                                    ></input>
                                    <button className="btn1" type="submit">Verify</button>
                                </form>
                            )}
                        </div>
                        <div className={classes.login}>
                            <h3>Login using password</h3>
                            <form className={classes.loginForm} onSubmit={handleEmailSubmit}>
                                {emailError && (
                                    <div>{emailError}</div>
                                )}
                                <input 
                                    type="text"
                                    placeholder="Email Address"
                                    onChange={(event) => setEmail(event.target.value)}
                                ></input>
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    onChange={(event) => setPassword(event.target.value)}
                                ></input>
                                <button className="btn1" type="submit">Login</button>
                            </form>
                            <div>
                                <GoogleButton 
                                    className={classes.googleBtn} 
                                    type="dark"
                                    onClick={handleGoogleSignIn}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.loginFooter}>
                        <Link to="/forgot-password">Forgot Password?</Link>
                        <div>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login