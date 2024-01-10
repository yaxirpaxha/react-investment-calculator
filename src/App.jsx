import { useState } from "react";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import Result from "./components/Result";
function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userData && userData.duration > 0;

  const handleChange = (key, value) => {
    setUserData((preUserData) => {
      return { ...preUserData, [key]: +value };
    });
  };
  return (
    <>
      <Header />
      <UserInfo userData={userData} onChange={handleChange} />
      {/* {!inputIsValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )} */}
      {/* {inputIsValid && <Result userData={userData} />} */}
      <Result userData={userData} />
    </>
  );
}

export default App;
