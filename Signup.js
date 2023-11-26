import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Tabcomponent from "./Tabs";
function Signup() {
  const Navigate = useNavigate();
  return (
    <div>
      <div id="home">
        <img  id="netflixlogo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="logo"/>
      <div id="sign">
        <label for="language"></label>
        <select name="language" id="language">
          <option variant="dark" value="English">
            English
          </option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
        </select>
        <Button id="s1" onClick={() => {
          Navigate('/signin');
        }}>
          SignIn
        </Button>
      </div>
      
      <div id="inf1">
        <h2>
          <b>The biggest Indian hits. The best Indian stories.<br></br>All streaming
          here.</b>
        </h2>
        <p>Watch anyWhere.Cancel anytime.</p>
        <h4>
          Ready to watch? Enter your email to create or restart your membership
        </h4>
      </div>
      <label for="email" id="email"></label>
      <input type="email" id="email" name="email" placeholder="Email address"></input>
      <Button id="but1"
        variant="danger"
        onClick={() => {
          Navigate("/signin");
        }}
      >
        Get Started   >
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      <Tabcomponent></Tabcomponent>
    </div>
  );
}
export default Signup;
