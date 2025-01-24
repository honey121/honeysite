import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../components/screens/login";
import Dashboard from "../components/screens/dashboard";
import { SCREEN_NAME } from "../components/constants/screenNames";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route exact path={SCREEN_NAME.LOGIN} element={<Login />} />
                <Route exact path={SCREEN_NAME.DASHBOARD} element={<Dashboard />} />                
            </Routes>
        </Router>
    )
}