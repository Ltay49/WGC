import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Membership from './Components/Membership';
import Card from "./Components/Card"
import Socities from "./Components/Socities";
import Opens from "./Components/Opens";
import Fixtures from "./Components/Fixtures";
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';
import QuickCourseLink from './Components/mainPageComp/CourseLink';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <QuickCourseLink />
              <MainPage />
            </>
          }
        />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="visitors/opens" element={<Opens />} />
        <Route path="visitors/societies" element={<Socities />} />
        <Route path="course/card" element={<Card />} />
        <Route path="memberships" element={<Membership />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

