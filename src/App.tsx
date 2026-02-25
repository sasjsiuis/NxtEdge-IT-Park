/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Services } from "./pages/Services";
import { Consultation } from "./pages/Consultation";
import { Achievements } from "./pages/Achievements";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { ContentProvider } from "./context/ContentContext";

export default function App() {
  return (
    <ContentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="services" element={<Services />} />
            <Route path="consultation" element={<Consultation />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  );
}
