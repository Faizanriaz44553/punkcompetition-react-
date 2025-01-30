import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserTrue = ()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          let uid = auth.user;
          console.log(uid);
        }
      });
}

export {UserTrue}