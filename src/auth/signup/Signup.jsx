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
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../Firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { setUser } from "../../store/features/user/User";
import useUserTrue from "../../utils/UserTrue";

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [file, setFile] = useState(null); // File state handle
    const user = useUserTrue();
    console.log(user);
    

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const { Fname, Uname, Number, email, password } = data;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            let profileURL = "";

            if (file) {
                const storageRef = ref(storage, `profilePictures/${user.uid}`);
                await uploadBytes(storageRef, file);
                profileURL = await getDownloadURL(storageRef);
            }

            await updateProfile(user, { displayName: Fname, photoURL: profileURL });

            // Save user data to Firestore
            await setDoc(doc(db, "users", user.uid), {
                fullName: Fname,
                username: Uname,
                phoneNumber: Number,
                email,
                profileURL,
                walletBalance: 0,
                ticketsPurchased: []
            });

            dispatch(setUser({ email: user.email, displayName: Fname, profileURL }));

            alert("Signup Successful!");
            navigate('/auth/login');
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };
     useEffect(()=>{
        if (user) {
            navigate('/');
        }
     },[user])
    return (
        <Container component="main" maxWidth="xs" className="flex items-center justify-center h-screen">
            <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
                <Typography variant="h5" align="center">
                    Signup
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <TextField label="Full Name" fullWidth margin="normal" variant="outlined" {...register("Fname", { required: true })} />
                        <TextField label="Username" fullWidth margin="normal" variant="outlined" {...register("Uname", { required: true })} />
                        <TextField label="Number" type="number" fullWidth margin="normal" variant="outlined" {...register("Number", { required: true })} />
                        <TextField label="Email" fullWidth margin="normal" variant="outlined" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" {...register("password", { required: true })} />
                        
                        {/* Profile Picture Input */}
                        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} required />

                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "20px" }}>
                            Signup
                        </Button>
                        <Typography>
                            Already have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate('/auth/login')}>Login</span>
                        </Typography>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Signup;
