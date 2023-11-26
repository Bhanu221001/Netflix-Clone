import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Signin(){
    const navigate=useNavigate();
    return (
        <div id="signinback">
            <img  id="netflixlogo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="logo"/>
            <div id="sindiv" style={{backgroundColor:"black"}}>
                <p id="sinp1">Sign In</p>
                <form>
                    <label for="sinemail"></label>
                    <input id="sinemail" type="email" name="sinemail" placeholder="Email or phone number" required/><br></br>
                    <label for="sinpass"></label>
                    <input id="sinpass" type='password'name="sinpass" placeholder='Password' required></input><br></br>
                    <Button onClick={()=>{navigate('/app')}} id="sinb1" variant='danger'>Sign In</Button><br></br>
                </form>
                <input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label for="vehicle1">Remember me</label>
                <p id="sinp2">Need help?</p>
                <p id="sinp3">New to Netflix? Sign Up now</p>
                <p id="sinp4">This page is protected by Google reCAPTCHA to <br></br>ensure you're not a bot.</p>
                <details>
                    <summary id="sinsum">Learn more</summary>
                        <p id="sinp5">The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>
                </details>
                <br></br>
                <br></br>
                <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        </div>
    )
}
export default Signin