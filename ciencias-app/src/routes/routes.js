import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "../pages/general/landing/landing.page.js";

import Main from '../pages/general/main/main.page.js'
import SignOut from "../pages/general/signout/signout.page.js";
import MainSecretary from "../pages/admin/secretary/main/index/main.page.js";
import Test from "../pages/test/test.page.js";
import { AppRoute, SecretaryRoute } from "./roles.routes.js";
import MainAdmin from "../pages/admin/main/main.page.js";
import SignInSecretary from "../pages/admin/secretary/signin/signin.page.js";
import IndexManagement from "../pages/admin/secretary/main/management/index/index.page.js";
import CreateStudent from "../pages/admin/secretary/main/management/student/create/createStudent.page.js";
import NotFound from "../pages/general/notfound/notfound.page.js";
import IndexPayments from "../pages/admin/secretary/main/payments/index/index.page.js";
import Pay from "../pages/admin/secretary/main/payments/pay/pay.page.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" exact element = { <Landing/> } />
        <Route path = "/app" exact element = { <AppRoute><Main/></AppRoute> } />
        <Route path = "/app/signout" exact element = { <SignOut/> } />
        <Route path = "/app/admin" exact element = { <AppRoute><MainAdmin/></AppRoute>} />
        <Route path = "/app/admin/secretary/signin" exact element = { <AppRoute><SignInSecretary/></AppRoute>} />
        <Route path = "/app/admin/secretary" exact element = {<SecretaryRoute><MainSecretary/></SecretaryRoute>} />
        <Route path = "/app/admin/secretary/management" exact element = {<SecretaryRoute><IndexManagement/></SecretaryRoute>} />
        <Route path = "/app/admin/secretary/management/student" exact element = { <SecretaryRoute><CreateStudent/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/payments" exact element = { <SecretaryRoute><IndexPayments/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/payments/pay" exact element = { <SecretaryRoute><Pay/></SecretaryRoute> } />
        {/* <Route path = "/app/admin/secretary/register/contract" exact element = { <SecretaryRoute><CreateContract/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/register/contract/lastcontract" exact element = { <SecretaryRoute><Contract/></SecretaryRoute> } /> */}
        <Route path = "/test" exact element = { <Test/> } />
        <Route path="*" element={<AppRoute><NotFound/></AppRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;