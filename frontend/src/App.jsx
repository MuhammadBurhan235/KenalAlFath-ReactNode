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
import Test from "./pages/Home/Test";

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
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
