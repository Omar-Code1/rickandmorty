import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/Notification.context';
import React from 'react';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
};

export default App;
