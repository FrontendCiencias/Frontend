import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages/general/main/main.page.js'
import SignOut from "../pages/general/signout/signout.page.js";
import Contract from "../pages/secretary/contract/contract.page.js";
import MainSecretary from "../pages/secretary/main/main.page.js";
import CreateContract from "../pages/secretary/register/createContract/createContract.page.js";
import CreateStudent from "../pages/secretary/register/createStudent/createStudent.page.js";
import RegisterSecretary from "../pages/secretary/register/register.page.js";
import SignInSecretary from "../pages/secretary/signin/signin.page.js";
import Test from "../pages/test/test.page.js";
import { AppRoute, SecretaryRoute } from "./roles.routes.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" exact element = { <Main/> } />
        <Route path = "/app/signout" exact element = { <SignOut/> } />
        <Route path = "/app/signin" exact element = { <AppRoute><SignInSecretary/></AppRoute>} />
        <Route path = "/app/secretary" exact element = {<SecretaryRoute><MainSecretary/></SecretaryRoute>} />
        <Route path = "/app/secretary/register" exact element = { <SecretaryRoute><RegisterSecretary/></SecretaryRoute> } />
        <Route path = "/app/secretary/register/student" exact element = { <SecretaryRoute><CreateStudent/></SecretaryRoute> } />
        <Route path = "/app/secretary/register/contract" exact element = { <SecretaryRoute><CreateContract/></SecretaryRoute> } />
        <Route path = "/app/secretary/register/contract/lastcontract" exact element = { <SecretaryRoute><Contract/></SecretaryRoute> } />
        <Route path = "/test" exact element = { <Test/> } />

      </Routes>
    </BrowserRouter>
  )
}

export default Router;