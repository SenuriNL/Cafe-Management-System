import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CustomerLogin from './pages/CustomerLogin';
import MenuPage from './pages/MenuPage';
import PromotionPage from './pages/PromotionPage';

import FeedbackCreateForm from './components/FeedbackCreateForm';
import FeedbacksAll from './components/FeedbacksAll';
import UpdateForm from './components/UpdateForm';

import Login from './components/Login';
import UserData from './components/UserData';
import AddFeedback from './components/AddFeedback';
import Feedbacks from './components/Feedbacks';
import AllCustomerFeedbacks from './components/AllCustomerFeedbacks';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <NavBar/>

      <div className='pages'>

        <Routes>

          <Route path = '/' element = {<Home />} />
          <Route exact path="/login" element={<CustomerLogin/>} />
          <Route path = '/menudisplay' element = {<MenuPage />} />
          <Route path = '/promotiondisplay' element = {<PromotionPage />} />

          {/* <Route path='/feedbackcreateform/:customerNIC' element={<FeedbackCreateForm />}/>  */}
          {/* <Route path='/feedbackupdateform/:id' element={<UpdateForm/>}/> */}
          {/* <Route path='/allfeedbacks' element={<FeedbacksAll/>}/> */}

          <Route path = '/login2' element = {<Login />} />
          <Route path="/profile/:customerNIC" element={<UserData />} />
          <Route path='/add/:userid' element={<AddFeedback/>} />
          <Route path="/feedback/:customerNIC/:feedbackId" element={<Feedbacks />} />
          <Route path="/allcustomerfeedbacks" element={<AllCustomerFeedbacks />} />

        </Routes>

      </div>

      <Footer/>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
