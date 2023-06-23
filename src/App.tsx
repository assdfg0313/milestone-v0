import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import { WalletProvider } from "./context/walletContext";
import ProfilePage from "./pages/ProfilePage";
import ProjectCreatePage from "./pages/ProjectCreatePage";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
        <Routes>
          <Route path="/project-create" element={<ProjectCreatePage />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
