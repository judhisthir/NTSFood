// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AdminDashboard from './src/admin/AdminDashboard';

const App: React.FC = () => {
  return (
    <PaperProvider>
      <AdminDashboard />
    </PaperProvider>
  );
};

export default App;
