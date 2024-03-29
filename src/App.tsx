import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SignupForm from './_auth/forms/SignupForm';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className='h-screen flex'>
        <Routes>
            {/* PUBLIC ROUTES */}
            <Route element={<AuthLayout/>}>
              <Route path='/sign-in' element={<SigninForm/>}/>
              <Route path='/sign-up' element={<SignupForm/>}/>
            </Route>

            {/* PRIVATE ROUTES */}
            <Route element={<RootLayout/>}>
              <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App