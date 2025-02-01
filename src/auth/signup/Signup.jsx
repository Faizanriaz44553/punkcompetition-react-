import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase.config";
import { setUser } from "../../store/features/user/User";
import UserTrue from "../../utils/UserTrue";
import useUserTrue from "../../utils/UserTrue";

const Signup = () => {
    const navigate = useNavigate();
    // const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            const userCrendential = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(setUser(userCrendential.user))
            console.log(userCrendential.user);
            navigate('/auth/login')
        } catch (error) {
            console.log(error);
        }
    }
    const user = useUserTrue();

    // Function to handle redirection if user is authenticated
    useEffect(() => {
      if (user) {
        navigate('/'); // If user exists, redirect to home page
      }
    }, [user, navigate]);
    return (
        <Container component="main" maxWidth="xs" className="flex items-center justify-center h-screen">
            <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
                <Typography variant="h5" align="center">
                    Signup
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box >
                        <TextField
                            label="Full Name"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("Fname", { required: true })}
                        />
                        <TextField
                            label="User Nmae"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("Uname", { required: true })}
                        />
                        <TextField
                            label="Number"
                            type="number"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("Number", { required: true })}
                        />
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
                            Signup
                        </Button>
                        <h1>do you have an account? <p onClick={() => navigate('/auth/signup')}>Signup</p></h1>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Signup;