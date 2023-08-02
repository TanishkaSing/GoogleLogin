import React from 'react'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const User = () => {
    const navigate = useNavigate()
    const image = Cookies.get('image')
    const name = Cookies.get('name')
    const logoutButtonClick = () => {
		Cookies.remove('image')
        Cookies.remove('name')
        navigate('/login')
	}
  return (
    <body className="user">
    <div >
        <div>
			<img src={image}></img>
			<h4>{name}</h4>
			<button id="logoutButton" onClick={logoutButtonClick}>LogOut</button>
		</div>
	</div>	
    </body>
  )
}

export default User