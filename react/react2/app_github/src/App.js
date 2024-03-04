import React from 'react';
import './App.css';
import { UserProvider } from './contexts/UserContext'; 
import UserSearch from './UserSearch';

function App() {
  return (
    <UserProvider>
      <div className="App">
      <h1>GitHub User Searcher</h1>
      </div>
    <UserSearch />
    </UserProvider>
  );
}
export default App;