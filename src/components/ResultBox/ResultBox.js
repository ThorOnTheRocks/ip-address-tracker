import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

import Loader from "../Loader/Loader";
import fetchIpGeo from "../../API";

// Styles
import './ResultBox.styles.scss'

const ResultBox = ({ queryIp, defaultIp, isFetching }) => {

  return (
    <div className="result__container">

      {isFetching &&
        <>
          <p>Fetching your local IP address details....</p>
          <Loader />
        </>
      }
      {defaultIp &&
        <>
          <div className="result result__ip">
            <h2 className="result__heading">IP Address</h2>
            <p className="result__paragraph">{defaultIp.ip}</p>
          </div>
          <div className="result result__location">
            <h2 className="result__heading">Location</h2>
            <p className="result__paragraph">{defaultIp.location.city}, {defaultIp.location.country} {defaultIp.location.postalCode}</p>
          </div>
          <div className="result result__timezone">
            <h2 className="result__heading">Timezone</h2>
            <p className="result__paragraph">{defaultIp.location.timezone}</p>
          </div>
          <div className="result result__isp">
            <h2 className="result__heading">ISP</h2>
            <p className="result__paragraph">{defaultIp.isp}</p>
          </div>
        </>
      }

      {queryIp &&
        <>
          <div className="result result__ip">
            <h2 className="result__heading">IP Address</h2>
            <p className="result__paragraph">{queryIp.ip}</p>
          </div>
          <div className="result result__location">
            <h2 className="result__heading">Location</h2>
            <p className="result__paragraph">{queryIp.location.city}, {queryIp.location.country} {queryIp.location.postalCode}</p>
          </div>
          <div className="result result__timezone">
            <h2 className="result__heading">Timezone</h2>
            <p className="result__paragraph">{queryIp.location.timezone}</p>
          </div>
          <div className="result result__isp">
            <h2 className="result__heading">ISP</h2>
            <p className="result__paragraph">{queryIp.isp}</p>
          </div>
        </>
      }


    </div>

  )
}

export default ResultBox;