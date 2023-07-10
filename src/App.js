import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<News pageSize={6} country="in" category="general" />}
            />
          </Routes>

          <Routes>
            <Route
              path="/business"
              element={<News pageSize={6} country="in" category="business" />}
            />
          </Routes>

          <Routes>
            <Route
              path="/entertainment"
              element={
                <News pageSize={6} country="in" category="entertainment" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/general"
              element={<News pageSize={6} country="in" category="general" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/health"
              element={<News pageSize={6} country="in" category="health" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/science"
              element={<News pageSize={6} country="in" category="science" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/sports"
              element={<News pageSize={6} country="in" category="sports" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/technology"
              element={<News pageSize={6} country="in" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
