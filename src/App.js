import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country="in"
                  category="general"
                />
              }
            />
          </Routes>

          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
