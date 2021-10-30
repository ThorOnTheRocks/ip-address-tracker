import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";

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
  const [queryIp, setQueryIp] = useState(null);

  const regexIp = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/

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

  const searchIp = (query) => {
    if (query.match(regexIp)) {
      setDefaultIp(false);
      setTimeout(fetchIpGeo(query).then((ipData) => {
        setIsfetching(false)
        setQueryIp(ipData)
      }), 1000)
    } else {
      alert("Please inser a valid Ip Address!")
    }
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
