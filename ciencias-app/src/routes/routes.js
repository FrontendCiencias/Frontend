import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "../pages/general/landing/landing.page.js";

import Main from '../pages/general/main/main.page.js'
import SignOut from "../pages/general/signout/signout.page.js";
import MainSecretary from "../pages/admin/secretary/index/main.page.js";
import Test from "../pages/test/test.page.js";
import { AppRoute, AuxiliarRoute, SecretaryRoute } from "./roles.routes.js";
import MainAdmin from "../pages/admin/main/main.page.js";
import SignInSecretary from "../pages/admin/secretary/signin/signin.page.js";
import IndexManagement from "../pages/admin/secretary/management/index/index.page.js";
import CreateStudent from "../pages/admin/secretary/management/student/create/createStudent.page.js";
import NotFound from "../pages/general/notfound/notfound.page.js";
import IndexPayments from "../pages/admin/secretary/payments/index/index.page.js";
import Pay from "../pages/admin/secretary/payments/pay/pension/pay.page.js";
import IndexStudentManagement from "../pages/admin/secretary/management/student/index/index.page.js";
import SignInAuxiliar from "../pages/admin/auxiliar/signin/signin.page.js";
import IndexAuxiliar from "../pages/admin/auxiliar/index/index.page.js";
import IndexAttendance from "../pages/admin/auxiliar/attendance/index/index.page.js";
import NormalAttendance from "../pages/admin/auxiliar/attendance/normal/normal.page.js";
import IndexPay from "../pages/admin/secretary/payments/pay/index/index.page.js";
import PayPension from "../pages/admin/secretary/payments/pay/pension/pay.page.js";
import PayPensionByID from "../pages/admin/secretary/payments/pay/pension/paybyid.page.js";

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
        <Route path = "/app/admin/secretary/management/student" exact element = { <SecretaryRoute><IndexStudentManagement/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/management/student/create" exact element = { <SecretaryRoute><CreateStudent/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/payments" exact element = { <SecretaryRoute><IndexPayments/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/payments/pay" exact element = { <SecretaryRoute><IndexPay/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/payments/pay/pension" exact element = { <SecretaryRoute><PayPension/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/payments/pay/pension/:id" exact element = { <SecretaryRoute><PayPensionByID/></SecretaryRoute> } />
        {/* <Route path = "/app/admin/secretary/register/contract" exact element = { <SecretaryRoute><CreateContract/></SecretaryRoute> } />
        <Route path = "/app/admin/secretary/register/contract/lastcontract" exact element = { <SecretaryRoute><Contract/></SecretaryRoute> } /> */}
        <Route path = "/app/admin/auxiliar/signin" exact element = { <AppRoute><SignInAuxiliar/></AppRoute>} />
        <Route path = "/app/admin/auxiliar" exact element = { <AuxiliarRoute><IndexAuxiliar/></AuxiliarRoute>} />
        <Route path = "/app/admin/auxiliar/attendance" exact element = { <AuxiliarRoute><IndexAttendance/></AuxiliarRoute>} />
        <Route path = "/app/admin/auxiliar/attendance/normal" exact element = { <AuxiliarRoute><NormalAttendance/></AuxiliarRoute>} />

        <Route path = "/test" exact element = { <Test/> } />

        <Route path="*" element={<AppRoute><NotFound/></AppRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;