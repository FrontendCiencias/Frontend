import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages/general/main.page.js'
import MainSecretary from "../pages/secretary/main/main.page.js";
import SignInSecretary from "../pages/secretary/signin/signin.page.js";
import Test from "../pages/test/test.page.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" exact element = { <Main/> } />
        <Route path = "/app/secretary/signin" exact element = { <SignInSecretary/> } />
        <Route path = "/app/secretary" exact element = { <MainSecretary/> } />
        <Route path = "/test" exact element = { <Test/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;