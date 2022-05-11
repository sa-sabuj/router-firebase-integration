import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()

    return (
        <div>
            <h2>Please log in</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            <form>

                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;