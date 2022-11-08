import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "../../common/Header";
import MainPage from "../../pages/main/components/MainPage";

function RoutesManager() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="" index element={<MainPage />} />
            </Route>
        </Routes>
    );
}

export default RoutesManager;