// components/Auth.js
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Assuming Firebase is used

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to dashboard
        } catch (error) {
            console.error("Authentication error", error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Auth;