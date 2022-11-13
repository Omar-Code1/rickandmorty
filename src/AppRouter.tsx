import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouterLayout from './common/RouterLayout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import PersonajePage from './pages/Personaje';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/personaje/:id" element={<PersonajePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
