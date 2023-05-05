import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Source from "./pages/sources/Source";
import SourceArticle from "./pages/sources/SourceArticle"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/source/article/:articleId" element={<SourceArticle />} />
            <Route path="/source/:sourceId" >
              <Route index element={<Source />} />
              <Route path="article/:articleId" element={<SourceArticle />} />
            </Route>

          </Route>
          
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
