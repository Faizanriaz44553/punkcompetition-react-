import Login from "../auth/login/Login";
import Signup from "../auth/signup/Signup";
import About from "../pages/about/About";
import Contact from "../pages/contactUs/Contact";
import DetailPage from "../pages/detailPage/DetailPage";
import Home from "../pages/home/Home";
import LiveWithdrew from "../pages/liveWithdarew/LiveWithdrew";
import PrivacyPolicy from "../pages/privacyAndPolicy/PrivacyPolicy";
import Profile from "../pages/profile/Profile";
import Winners from "../pages/winners/Winners";

const RoutesJson = [
    {
        path : '/',
        element :<Home/>
    },
    {
        path : '/about',
        element :<About/>
    },
    {
        path : '/Winners',
        element :<Winners/>
    },
    {
        path : '/LiveWithdrew',
        element :<LiveWithdrew/>
    },
    {
        path : '/Contact',
        element :<Contact/>
    },
    {
        path : '/DetailPage/:id',
        element :<DetailPage/>
    },
    {
        path : '/Privacy&Policy',
        element :<PrivacyPolicy/>
    },
    {
        path : '/profile',
        element :<Profile/>
    },
    {
        path : '/auth/signup',
        element :<Signup/>
    },
    {
        path : '/auth/login',
        element :<Login/>
    },
    {
        path : '*',
        element :"not found 404"
    },
];


export default RoutesJson;