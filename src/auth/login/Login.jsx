import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase.config";

const Login = () => {
    const navigate = useNavigate()
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data.email , data.password);
        
       await signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user) {
            navigate('/')
          }
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };
    

    return (
        <Container component="main" maxWidth="xs" className="flex items-center justify-center h-screen">
            <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
                <Typography variant="h5" align="center">
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box >
                        <TextField
                            label="Email"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span>This field is required</span>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: "20px" }}
                        >
                            Login
                        </Button>
                        <h1>do you have an account? <p onClick={()=> navigate('/auth/signup')}>Signup</p></h1>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;

