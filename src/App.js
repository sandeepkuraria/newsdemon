import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="general"
              />
            }
          />
        </Routes>

        <Routes>
          <Route
            exact
            path="/home"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="general"
              />
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="business"
              />
            }
          />
        </Routes>

        <Routes>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="entertainment"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="general"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="health"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="science"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="sports"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
