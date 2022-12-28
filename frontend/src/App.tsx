import React, { useEffect, useState, useSyncExternalStore } from "react";
import api from './services/api';

function App() {

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data);
    })
  }, []);

  return (
    <div className="App">
      {users.map(user => )}
    </div>
  );
}

export default App;
