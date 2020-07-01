import React from 'react';
import { Button } from '@material-ui/core';

import {useHistory} from 'react-router-dom'
const Login = ()=>{
    const history = useHistory();
    const logout = ()=>{
        localStorage.removeItem('user-token');
        history.push('/');
    }
    return(
        <div>
            Dashboard
            <Button variant="outlined" color="primary" onClick={logout}>Log out </Button>
        </div>
    )
}

export default Login;