import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ROLE from '../../constants/Role';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(response)
                navigate('/product');
                setMessage(data.message); // Message from the backend
            } else {
                setMessage('Error during registration');
            }
        } catch (error) {
            setMessage('Error during registration');
        }
    };

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack the text fields vertically
                    justifyContent: 'center',
                    marginLeft: '5%', // Use a percentage for responsiveness
                    marginRight: '5%', // Use a percentage for responsiveness
                    // maxWidth: '90%', // Use a percentage for responsiveness
                    minWidth: '300px',
                    '@media (max-width: 600px)': {
                        marginLeft: '50%', // Adjust for smaller screens
                        marginRight: '50%', // Adjust for smaller screens
                        // maxWidth: '96%', // Adjust for smaller screens
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column', // Stack the text fields vertically
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '300px',
                        minWidth: '50px',
                        border: '1px solid',
                        borderColor: 'black',
                        borderRadius: '10px',
                        padding: '20px', // Optional: Add padding for better visual spacing
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            marginTop: "-3px",
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Welcome to Flystore app
                    </Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        sx={{
                            width: '300px', // specify the width
                            height: '50px', // specify the height
                            marginBottom: '10px', // Add space between the text fields
                        }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        password={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        sx={{
                            width: '300px', // specify the width
                            height: '50px', // specify the height
                            marginTop: '10px', // Add space between the text fields
                        }}
                    />
                    <Button variant="contained" onClick={handleSubmit}>Login</Button>
                    {message && <p>{message}</p>}
                </Box>
            </Box>
        </>
    )
}

export default LoginPage