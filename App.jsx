import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage1 from './components/mainPage1/MainPage1'
import MainPage2 from './components/mainPage2/MainPage2';

const App = () => {
    return (
        <>
            {/* <MainPage1 /> */}
            <Router>

                <Routes>
                    <Route path="" element={<MainPage1 />} />
                    <Route path="/page2" element={<MainPage2 />} />
                </Routes>
            </Router>
        </>
    )
}

export default App