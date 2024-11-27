import useAuthStore from "@/hooks/useAuthStore";
import { APP_ROUTE_PATHS } from "@/routes/route-path";
import { auth } from "@/services/firebase.service";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

import { useNavigate } from "react-router";

const useSocialAuth = () => {
  const [error, setError] = useState("");
  const { setToken, setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleSocialAuth = async (
    provider: GoogleAuthProvider | FacebookAuthProvider
  ) => {
    try {
      const res = await signInWithPopup(auth, provider);
      const token = await res.user.getIdToken();
      setToken(token);
      setUser({
        email: res.user.email || "",
        name: res.user.displayName || "",
        photo: res.user.photoURL || "",
      });
      navigate(APP_ROUTE_PATHS.CHARACTERS, { replace: true });
    } catch (e) {
      setError(`Something went wrong ${e}`);
    }
  };

  return {
    handleSocialAuth,
    error,
  };
};

export default useSocialAuth;
