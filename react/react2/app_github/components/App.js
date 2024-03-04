import React from 'react';
import { UserProvider } from './components/UserContext';
import UserSearch from './UserSearch';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>GitHub User Search</h1>
        <UserSearch />
      </div>
    </UserProvider>
  );
};

export default App;
