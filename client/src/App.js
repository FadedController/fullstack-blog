import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/members").then((res) => {
      res.json().then((data) => {
        setData(data);
      });
    });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
