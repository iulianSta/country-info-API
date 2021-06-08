// Import React, { useState, useEffect } from "react"
import React, { useState, useEffect } from "react";
// Import axios from "axios"
import axios from "axios";
// Import Loading
import Loading from "./components/Loading";
// Import Country
import Country from "./components/Country";

// App function
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    let textToUrl = encodeURIComponent(userInput);

    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;
    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log(`Your had an ${err}`));
  }
  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <h1>Country Information's</h1>
      <form onSubmit={submitHandle} className="form">
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Please write a country name"
        />
        <button type="submit">Search</button>
      </form>
      <Country results={results} />
    </React.Fragment>
  );
};

// Export App
export default App;
