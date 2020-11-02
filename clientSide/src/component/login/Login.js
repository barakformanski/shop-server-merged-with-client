import React, { useContext } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import Context from '../../component/Context.js';
import BetterLogInApp from '../LoginBetterWay/BetterLogInApp.js'
function Login() {
   
    const { email, setEmail, password, setPassword, name, setName, userLogin, setUserLogin } = useContext(Context);

    function validateForm() {

        return email.length > 0 && password.length > 0 ;
        // return email.length > 0 && password.length > 0 && name.length > 0;

    }

    function changeName() {
        setUserLogin(true)
    }

    function handleSubmit(event) {

        event.preventDefault();

    }

    return (
        <div className="Login">
            <div>
                        <BetterLogInApp />
                        </div>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="name" bsSize="large">
                    <ControlLabel>שם</ControlLabel>
                    <FormControl
                        autoFocus
                        type="string"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>דואר אלקטרוני</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>סיסמא</ControlLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Link to={`/`}>

                    <Button block bsSize="large" disabled={!validateForm()} type="submit" onClick={changeName}>
                        Login
        </Button>
                </Link>

            </form>
        </div >
    );
}
export default Login;