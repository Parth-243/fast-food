import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import NavScrollExample from "./component/Pages/Home/NavScrollExample";
import Abouts from "./component/Pages/AboutUs/Abouts";
import ContactUs from "./component/Pages/ContactUs/ContactUs";
import SignUpForm from "./component/Pages/SignupPages/SignUpForm";
import BusinessSignup from "./component/Pages/SignupPages/BusniessSignup";
import LandingPages from "./component/Pages/LandingPage/LandingPages";
import UserLogin from "./component/Pages/Login/UserLogin/UserLogin";
import Login from "./component/Pages/Login/BusinessLogin/Login";
import AdminLogin from "./component/Pages/Login/AdminLogin/AdminLogin";
import UserHome from "./component/Panels/UserPanel/User/UserHome";
import RestaurantHome from "./component/Panels/BusinessPanel/RestaurantHome";
// import FoodMenuList from "./component/Panels/BusinessPanel/FoodMenu/FoodMenuList";
import FoodOrderingPage from "./component/Panels/UserPanel/UserFastFood/FoodOrderingPage";
import UserProfile from "./component/Panels/UserPanel/UserProfile/UserProfile";
import CartHistoryPage from "./component/Panels/UserPanel/UserAddToCart/CartHistoryPage";
import OrderHistory from "./component/Panels/UserPanel/UserOrderHistory/OrderHistory";
import BusinessProfile from "./component/Panels/BusinessPanel/BusinessProfile/BusinessProfile";
import FastFood from "./component/Pages/FoodPages/FastFood";
import Restaurant from "./component/Pages/RestaurantPage/Restaurant";
import Admin from "./component/Panels/AdminPanel/Admin";
import RestaurantMenu from "./component/Panels/BusinessPanel/RestaurantMenu";
import UserFoodItem from "./component/Panels/UserPanel/UserFoodItemPage/UserFoodItem";
import UserRestaurantPage from "./component/Panels/UserPanel/UserRestaurantPage/UserRestaurantPage";
import RestaurantFoodMenu from "./component/Panels/BusinessPanel/RestaurantFoodMenu/RestaurantFoodMenu";
import PaymentOrderPage from "./component/Panels/BusinessPanel/PaymentOrder/PaymentOrderPage";
// import AdminPannel from "./component/Panels/AdminPanel/AdminPannel";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<NavScrollExample />} />
            <Route path="/aboutus" element={<Abouts />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/businessSignIn" element={<BusinessSignup />} />
            <Route path="/" element={<LandingPages />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/businessLogin" element={<Login />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/fastFoodHome" element={<FastFood />} />
            <Route path="/Resaturant" element={<Restaurant />} />
          </Route>
          <Route path="/userHomePage" element={<UserHome />} />
          <Route path="/restaurantPage" element={<RestaurantHome />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          {/* <Route path="/foodMenuList" element={<FoodMenuList />} /> */}
          <Route path="/fastFood" element={<FoodOrderingPage />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/userCartHistory" element={<CartHistoryPage />} />
          <Route path="/userOrderHistory" element={<OrderHistory />} />
          <Route path="/businessProfile" element={<BusinessProfile />} />
          <Route path="/adminHomePage" element={<Admin />} />
          <Route path="/UserfooditemPage" element={<UserFoodItem />} />
          <Route path="/userRestaurantPage" element={<UserRestaurantPage />} />
          <Route path="/RestaurantFoodMenu" element={<RestaurantFoodMenu />} />
          <Route path="/PaymentOrderPage" element={<PaymentOrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
