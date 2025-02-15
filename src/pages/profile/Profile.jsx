import React, { useEffect, useState } from "react";
import './Profile.css';
import { auth, db, onAuthStateChanged } from "../../Firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/features/userData/UserData";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../../components/skeletonLoader/SkeletonLoader";
import AutorenewIcon from '@mui/icons-material/Autorenew';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.UserData.user);
    
    const [isLoading, setIsLoading] = useState(false);

    const fetchdata = async (userEmail) => {
        try {
            const q = query(collection(db, "users"), where("email", "==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                dispatch(setUserData(doc.data()));
            });
        } catch (error) {
            console.log("Error fetching data:", error.message);
        }
    };

    const loadAmount = async () => {
        setIsLoading(true); // Loader shuru karein
        try {
            const userEmail = auth.currentUser?.email; // Authenticated user ka email lein
            if (!userEmail) throw new Error("User not authenticated!");

            const q = query(collection(db, "users"), where("email", "==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                dispatch(setUserData(doc.data()));
            });

        } catch (error) {
            console.log("Error loading amount:", error.message);
        } finally {
            setIsLoading(false); // Loader band karein
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchdata(user.email);
            } else {
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return (
        <div className="main-div">
            <div className="topBackground">
                {!userData ? (
                    <div className="profile-loader-div">
                        <Loader />
                    </div>
                ) : (
                    <div>
                        <div className="profileMainDiv">
                            <div className="profilePic">
                                <img className="w-[100%] profile-image" src={userData?.profileURL} alt="Profile Pic" />
                            </div>
                        </div>
                        <div>
                            <h2 className="prfileData">{userData?.username}</h2>
                            <h2 className="prfileData">{userData?.email}</h2>
                            <h2 className="prfileData">{userData?.phoneNumber}</h2>
                        </div>
                    </div>
                )}
            </div>
            {!userData ? (
                <SkeletonLoader lines={1} width="100%" height={200} />
            ) : (
                <div className="profile-detail-main-div">
                    <div className="profile-detail-second-div">
                        <div className="profile-amount-main-div">
                            <div className="profile-amount-div">
                                <div>
                                    <h1 className="profile-wallet-balance-heading">Wallet Balance</h1>
                                    <div className="flex justify-center items-center gap-2 w-[150px] h-[50px]">
                                        {isLoading ? (
                                            <Loader /> 
                                        ) : (
                                            <h1 className="profile-user-amount">
                                                {userData?.walletBalance}
                                                <span className="doller-sign">£</span>
                                            </h1>
                                        )}
                                        <span className="profile-reload-amount-icon" onClick={loadAmount}>
                                            <AutorenewIcon fontSize="large" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-amount-detail-div">
                                <div className="profile-card-main-div">
                                    <div className="profile-card-image-div-1">
                                        <img className="profile-visaCard-image" src="/images/pngwing.com.png" alt="Visa Card" />
                                    </div>
                                    <div className="profile-card-image-div-2">
                                        <img className="profile-masterCard-image" src="/images/mc_sym_debit_pos_46_1x.png" alt="MasterCard" />
                                    </div>
                                </div>
                                <div className="profile-addAmount-main-div">
                                    <button className="profile-addAmount-button">Add Amount</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
