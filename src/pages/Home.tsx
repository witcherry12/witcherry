import Lottie from "lottie-react";
import splash from "../assets/animation/SplashW.json";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    setTimeout(() => {
      navigate("/menu/main");
    }, 1000);
  };
  return (
    <Lottie
      loop={false}
      autoplay={true}
      animationData={splash}
      onComplete={handleNavigation}
    />
  );
};
