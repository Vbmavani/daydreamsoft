import React, { useState } from 'react';
import {Button} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../store/actions/auth.action';

const Login = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    // const auth_state = useSelector(state=>state); 
    const userLoginSuccess =()=>{
        history.push('/dashboard');
    }
    const login = ()=>{
        dispatch(userLogin({email,password},userLoginSuccess())); 
        
    }
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState ('');
    
    console.log('email',email);
    console.log('password',password);
    
    return(
        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <div style={{width:'500px'}}>
            <div>Login Page</div>
            <form onSubmit={login}>
            <TextField id="outlined-basic" type="email"label="email" variant="filled" required style={{width:'300px',margin:'20px'}} onChange={(e)=>setEmail(e.target.value)}/>
            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" required style={{width:'300px',margin:'20px'}} onChange={(e)=>setPassword(e.target.value)}/>
            <div><Button variant="contained" color="primary" type="submit" >Log in</Button></div>
            </form>
            </div>
        </div>
    )
}

export default Login;