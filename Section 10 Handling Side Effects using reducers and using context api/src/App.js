import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {

  const ctx = useContext(AuthContext);

  ////////////////////////////////////////////////////////////////SVE JE PREMESTENO U AUTH-CONTEXT
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
  //   if (storedUserLoggedInInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", 1);
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    //Da je zakucana vrednost isLoggedIn u provideru i da se ne menja onda mi ne bi trebao value objekat
    //posto se vrednost menja u zavisnosti od state-a onda mora da se prosledi objekat ovako 
    // <AuthContext.Provider value={{
    //   isLoggedIn: isLoggedIn,
    //   onLogout: logoutHandler
    // }}>
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
