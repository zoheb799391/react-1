import React, { useEffect, useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(`https://api.example.com/data?search=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <h1>API Data</h1>
      <ul>
        {apiData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;