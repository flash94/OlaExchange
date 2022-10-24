import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// private routes
import UserRoute from './components/PrivateRoutes/exchangerRoute'
import AdminRoute from './components/PrivateRoutes/adminRoute'

import HomePage from './pages/Home/home';
import verifyEmail from './pages/VerifyEmail/verifyEmail';
import ResetPassword from './pages/ResetPassword/resetPassword'
import ContactPage from './pages/Home/contact';
import FaqPage from './pages/Home/faq';
import TermsPage from './pages/Home/terms';
import PrivacyPage from './pages/Home/privacy';
import NotFoundPage from './pages/404/NotFound';




// user routes
import UserDashboard from './pages/Exchangers/Dashboard/dashboard';
import UserProfile from './pages/Exchangers/Profile/profile';
import UserNotifications from './pages/Exchangers/Notifications/notifications';
import UserTrade from './pages/Exchangers/Trade/trade';
import UserAccount from './pages/Exchangers/AccountDetails/accountDetails';
import UserTransactions from './pages/Exchangers/Transactions/transactions';
import UserTransactionDetails from './pages/Exchangers/Transactions/TransactionDetails';
import UserWallet from './pages/Exchangers/Wallet/Wallet';
import UserWithdraw from './pages/Exchangers/Withdraw/Withdraw';
import AirtimePage from './pages/Exchangers/BillPayments/Airtime';
import BuyDataPage from './pages/Exchangers/BillPayments/BuyData';
import Electricity from './pages/Exchangers/BillPayments/Electricity';
import Cables from './pages/Exchangers/BillPayments/Cables';
import UtilitiesPage from './pages/Exchangers/BillPayments/Utilities';

// admin routes
import AdminLogin from './pages/Admin/Login/login'
import AdminForgotPassword from './pages/Admin/ForgotPassword/forgotPassword';
import AdminDashboard from './pages/Admin/Dashboard/dashboard';
import Admins from './pages/Admin/Admin/admin';
import adminProfile from './pages/Admin/Admin/adminProfile';
import AdminTrades from './pages/Admin/Trades/trades';
import AdminUsers from './pages/Admin/Users/users';
import AdminRates from './pages/Admin/Rates/rates';
import ViewAdmin from './pages/Admin/Admin/viewAdmin';
import UsersDetails from './pages/Admin/Users/usersbyId';
import AdminTradeDetails from './pages/Admin/Trades/TradeById';
import UserTradeDetails from './pages/Admin/Users/userTradebyId'
import AdminNewRates from './pages/Admin/Rates/NewRates';
import UpdateRates from './pages/Admin/Rates/UpdateRate';




function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* home route */}
            <Route exact path="/" element={<HomePage />} />
            <Route path="/verifyemail/:code" element={<verifyEmail />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacypolicy" element={<PrivacyPage />} />

              {/* Exchanger route */}
              <Route path="/dashboard"
                  element={
                    <UserRoute>
                      <UserDashboard />
                    </UserRoute>
                  } />
              <Route path="/utilities/buyairtime" element={<AirtimePage />} />
              <Route path="/utilities/buydata" element={<BuyDataPage />} />
              <Route path="/utilities/buyelectricity" element={<Electricity />} />
              <Route path="/utilities/tvsubscription" element={<Cables />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route exact path="/utilities" element={<UtilitiesPage />}  />
              <Route path="/notifications" element={<UserNotifications />} />
              <Route path="/start-trade" element={<UserTrade />} />
              <Route path="/my-wallet" element={<UserWallet />} />
              <Route path="/withdraw" element={<UserWithdraw />} />
              <Route path="/account" element={<UserAccount />} />
              <Route path="/trades" element={<UserTransactions />} />
              <Route path="/trade/:id" element={<UserTransactionDetails />} />



         
              <Route path="*" element={<NotFoundPage />} />

              {/* admin route */}
              <Route exact path="/admin" element={<AdminLogin />} />
              <Route path="/admin/forgotpassword" element={<AdminForgotPassword />} />
              <Route path="/admin/dashboard"
                element={
                  <AdminRoute>
                   <AdminDashboard />
                  </AdminRoute>  
                }/>

              <Route path="/admin/admin"
                element={
                  <AdminRoute>
                   <Admins />
                  </AdminRoute>  
              }/>

              <Route path="/admin/all" 
                element={
                  <AdminRoute>
                   <ViewAdmin />
                  </AdminRoute>  
              }/>

              <Route path="/admin/profile" 
                element={
                  <AdminRoute>
                   <adminProfile />
                  </AdminRoute>  
              }/>

              
              <Route path="/admin/trades"
                element={
                  <AdminRoute>
                   <AdminTrades />
                  </AdminRoute>  
              }/>

              <Route path="/admin/trade/:id"
                element={
                  <AdminRoute>
                   <AdminTradeDetails />
                  </AdminRoute>  
              }/>

              <Route path="/admin/users"
                element={
                  <AdminRoute>
                   <AdminUsers />
                  </AdminRoute>  
              }/>
              
              <Route path="/admin/user/:id"
                element={
                  <AdminRoute>
                   <UsersDetails />
                  </AdminRoute>  
              }/>

              <Route path="/admin/usertrade/:id" 
                element={
                  <AdminRoute>
                   <UserTradeDetails />
                  </AdminRoute>  
              }/>

              <Route path="/admin/rates"
                element={
                  <AdminRoute>
                   <AdminRates />
                  </AdminRoute>  
              }/>

              <Route path="/admin/add/rates"
                element={
                  <AdminRoute>
                   <AdminNewRates />
                  </AdminRoute>  
              }/>

              <Route path="/admin/edit/rate/:id"
                element={
                  <AdminRoute>
                   <UpdateRates />
                  </AdminRoute>  
              }/>
              
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
