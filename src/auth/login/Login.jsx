import React from "react";
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
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data.email, data.password);
        
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                if (user) {
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <Container 
            component="main" 
            maxWidth="xs" 
            className="flex items-center justify-center h-screen"
            
        >
            <Paper 
                elevation={3} 
                style={{ 
                    padding: "20px", 
 
                    backgroundColor: "var(--color-white)",
                    color: "var(--color-text-primary)"
                }}
            >
                <Typography variant="h5" align="center" style={{ color: "var(--color-dark-red)" }}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <TextField
                            label="Email"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("email", { required: true })}
                            style={{ backgroundColor: "var(--color-white)" }}
                        />
                        {errors.email && <span style={{ color: "var(--color-red)" }}>This field is required</span>}
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("password", { required: true })}
                            style={{ backgroundColor: "var(--color-white)" }}
                        />
                        {errors.password && <span style={{ color: "var(--color-red)" }}>This field is required</span>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "20px", 
                                backgroundColor: "var(--color-dark-red)",
                                color: "var(--color-white)" 
                            }}
                        >
                            Login
                        </Button>
                        <Typography align="center" style={{ marginTop: "10px", color: "var(--color-text-secondary)" }}>
                            Do you have an account? 
                            <span 
                                onClick={() => navigate("/auth/signup")} 
                                style={{ color: "var(--color-dark-red)", cursor: "pointer", fontWeight: "bold" }}
                            >
                                Signup
                            </span>
                        </Typography>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
