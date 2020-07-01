import React from 'react';
import { Typography, Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
const HomePage = (props) => {
    const history = useHistory();
    return (
        <div>
            <Typography variant="h3" >
                Welcom to Daydreamsoft
            </Typography>
            <Button variant="contained" color="primary" onClick={()=>{history.push('./login')}}>
                Log In
            </Button>
            <Button variant="contained" color="secondary" onClick={()=>{history.push('./signup')}}>
                Sign Up
            </Button>
        </div>
    )
}

export default HomePage;