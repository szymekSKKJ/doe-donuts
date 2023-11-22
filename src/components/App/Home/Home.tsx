import { useEffect } from "react";
import CreateBox from "./CreateBox/CreateBox";
import CustomOrder from "./CustomOrder/CustomOrder";
import Header from "./Header/Header";
import WeeklySpecial from "./WeeklySpecial/WeeklySpecial";

const Home = () => {
  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  return (
    <>
      <Header></Header>
      <WeeklySpecial></WeeklySpecial>
      <CreateBox></CreateBox>
      <CustomOrder></CustomOrder>
    </>
  );
};

export default Home;
