import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Home from "../Components/Goggleauthcompo/Home"
import Login from "../Components/Goggleauthcompo/Login";
import Signup from "../Components/Goggleauthcompo/Signup";
import ProtectedRoute from "../Components/Goggleauthcompo/ProtectedRoute";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import HomeCompo from "../Components/HomeComponent/HomeCompo";
import Buissnespagecomp from "../Components/Buisnesspage/Buissnespagecomp";
import Foodstoremain from "../Components/Foodstorecomponent/Foodstoremain/Foodstoremain";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import LoginMern from "../Components/Loginmern/LoginMern";

function Routescompo() {
  return (
   <div>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/foodstore" element={<Foodstoremain/>}/>
              <Route path="/Buissnespagecomp" element={<Buissnespagecomp/>} />
                 <Route path="/HomeCompo" element={<HomeCompo/>} />
              <Route path="/" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/loginmern" element={<LoginMern/>} />
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
      </div>
  );
}

export default Routescompo;