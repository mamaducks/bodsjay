import React from "react";
import {
  BrowserRouter,
  Route,
  // Router as ReactRouter,
  Routes,
} from "react-router-dom";
// import { history } from "../_helpers/_helpers";
import { ReviewsPage } from "../PageTemplates/Reviews.jsx";
import { ContactPage } from "../PageTemplates/Contact.jsx";
import { FaqPage } from "../PageTemplates/Faq.jsx";
import { HomePage } from "../PageTemplates/Home.jsx";
import { ServicesPage } from "../PageTemplates/Services.jsx";

export function Router() {
  return (
    // <ReactRouter history={history}>
      <BrowserRouter>
        <Routes>
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/Faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route exact path="/"  element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    // </ReactRouter>
  );
}