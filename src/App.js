import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PATHS} from "./constants/common";
import {Landing} from "./pages/Landing/landing";
import {FormLogin} from "./pages/Authentication/formLogin";
import Cart from "./pages/Cart/Cart";
import UserQuestion from './pages/questions/UserQuestion';
import AdminQuestion from './pages/questions/AdminQuestion';

const {
    LANDING,
    AUTH,
    CART,
} = PATHS;

export const App = () => {

    return (
            <Routes>
                <Route exact path={LANDING} element={<Landing/>}/>
                <Route exact path={AUTH} element={<FormLogin/>}/>
                <Route exact path={CART} element={<Cart/>}/>
                <Route exact path='/userQuestion' element={<UserQuestion/>}/>
                <Route exact path='/AdminQuestion' element={<AdminQuestion/>}/>
            </Routes>
    );
}
