import React from 'react';
import UserInput from './atomic/userInput'; // Adjust the path as necessary
import { useFlags } from "launchdarkly-react-client-sdk";


function Login() {
    const { demo } = useFlags();

  return (
    <div>
    { demo ? (
        <div>
            <h2>Login</h2>
            <UserInput label="Username: " defaultValue="email@mail.com" />
            <UserInput label="Password: " defaultValue="8 character" />
        </div>
    ) : null
    }
    </div>
    );
}

export default Login;