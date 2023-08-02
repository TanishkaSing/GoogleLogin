import React, { useState } from "react";
import "./loginPage.css";
import socologo from "../assets/soco_logo.png";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm = () => {

	const navigate = useNavigate()
    return(
        <body>	
		<div id="socologo" className="cover">
		<div className="close"></div>	
		<div className="socologo" > <img src= {socologo}  alt ="socologo"/>
		</div>
		<div id="login">
				<GoogleOAuthProvider clientId="1041401416308-qrtsroic0bq8t280k1fhv7u0l8l561v3.apps.googleusercontent.com">
				<GoogleLogin
 				 onSuccess={credentialResponse => {
				var userObject = jwt_decode(credentialResponse.credential);
    			console.log(userObject);
				Cookies.set('image', userObject.picture)
				Cookies.set('name', userObject.name)
				navigate('/user')
				
  				}}
  			onError={() => {
    	console.log('Login Failed');
  		}}/>
				</GoogleOAuthProvider>
			</div>
			<div>
				<h5><span>Or</span></h5>
			</div>
			<div className="form" > 
 				<label htmlFor="email">Useremail / Username</label> <br></br>
				<input className="email" placeholder="" name="email" id="email"/> <br></br> 					<br></br>
				<label htmlFor="pass">Password</label> <br></br>
				<input className="password" placeholder="" name="pass" id="pass"/> 
				<br></br> 
			</div>
			<div className="check" >
				<input type="checkbox" name= "login"/>
				<label for="login"> save details </label>
			</div>
			<div className="login" type="submit">L O G I N</div> 	
		</div>	
    </body>
    )
	}


export default LoginForm
