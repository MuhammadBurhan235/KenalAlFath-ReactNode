import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import SignInUp from "./components/SignInUp";
import SignInUpAlFath from "./components/SignInUpAlFath";
import TventMP from "./components/TventMP";
import InputIdenLeng from "./components/InputIdenLeng";

import DashboardCatalog from "./components/DashboardCatalog";
import HomePage from "./pages/Home/HomePage";
import IntPicPage from "./pages/IntPic/IntPicPage";
import FullscreenDetector from "./pages/Home/FullscreenDetector";
import ListItemPage from "./pages/Home/ListItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboardcatalog" element={<DashboardCatalog />} />

        <Route path="/userlist" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
        <Route path="/signinuppage" element={<SignInUp />} />
        <Route path="/signinupalfath" element={<SignInUpAlFath />} />
        <Route path="/tventmainpage" element={<TventMP />} />
        <Route path="/detailidentitypage" element={<InputIdenLeng />} />
        <Route path="/" element={<IntPicPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/list" element={<ListItemPage />} />
        <Route path="/detector" element={<FullscreenDetector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
