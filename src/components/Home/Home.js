import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This is home</h2>
            <p>Current user : {user ? user.displayName : "User is not Loged in"}</p>
        </div>
    );
};

export default Home;