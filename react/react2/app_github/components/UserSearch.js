import React, { useState } from 'react';
import { useUserContext } from './components/UserContext';
import axios from 'axios';

const UserSearch = () => {
  const { loading, setLoading, error, setError, users, setUsers } = useUserContext();
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUsers(response.data.items);
    } catch (err) {
      setError(`Failed to fetch users: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error fetching {error}</p>}
      {users.length === 0 && !loading && !error && <p>No results...</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
