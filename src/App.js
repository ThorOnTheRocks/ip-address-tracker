import React, { useEffect, useState } from "react";

// Components
import SearchBar from "./components/SearchBar/SearchBar";
import Map from "./components/Map/Map";

// FetchIPGeoAPI
import fetchIpGeo from "./API";

// Styles
import './sassStyles/_global.scss';
import './sassStyles/_typography.scss';
import './App.scss';
import ResultBox from "./components/ResultBox/ResultBox";


function App() {

  const [defaultIp, setDefaultIp] = useState('');
  const [isFetching, setIsfetching] = useState(false);
  const [queryIp, setQueryIp] = useState(null)

  useEffect(() => {
    if (queryIp) {
      setDefaultIp(false)
    } else {
      setIsfetching(true)
      fetchIpGeo(defaultIp).then((ipData) => {
        setIsfetching(false)
        setDefaultIp(ipData)
      });
    }
  }, [queryIp])

  console.log(queryIp)

  const searchIp = (query) => {

    setTimeout(fetchIpGeo(query).then((ipData) => {
      setQueryIp(ipData)
    }), 1000)

    return query
  }

  return (
    <main className="App">
      <div className="container__heading">
        <h1 className="heading">IP Address Tracker</h1>
      </div>
      <SearchBar onQueryIp={searchIp} />
      <Map
        defaultIp={defaultIp}
        queryIp={queryIp}
        onQueryIp={searchIp}

      />
      <ResultBox
        isFetching={isFetching}
        defaultIp={defaultIp}
        queryIp={queryIp}
        onQueryIp={searchIp}

      />
    </main>
  );
}

export default App;
