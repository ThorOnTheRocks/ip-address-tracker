import React from "react";
import Loader from "../Loader/Loader";

// Styles
import './ResultBox.styles.scss'

const ResultBox = ({ queryIp, defaultIp, isFetching }) => {

  const addLineBreak = (text) => {
    return text = text.replace('-', '\n')
  }

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
          <div className="line"></div>
          <div className="result result__location">
            <h2 className="result__heading">Location</h2>
            <p className="result__paragraph">{defaultIp.location.city}, {defaultIp.location.country} {defaultIp.location.postalCode}</p>
          </div>
          <div className="line"></div>
          <div className="result result__timezone">
            <h2 className="result__heading">Timezone</h2>
            <p className="result__paragraph">UTC {defaultIp.location.timezone}</p>
          </div>
          <div className="line"></div>
          <div className="result result__isp">
            <h2 className="result__heading">ISP</h2>
            <p className="result__paragraph display-linebreak">{addLineBreak(defaultIp.isp)}</p>
            {console.log(addLineBreak(defaultIp.isp))}
          </div>
        </>
      }

      {queryIp &&
        <>
          <div className="result result__ip">
            <h2 className="result__heading">IP Address</h2>
            <p className="result__paragraph">{queryIp.ip}</p>
          </div>
          <div className="line"></div>
          <div className="result result__location">
            <h2 className="result__heading">Location</h2>
            <p className="result__paragraph">{queryIp.location.city}, {queryIp.location.country} {queryIp.location.postalCode}</p>
          </div>
          <div className="line"></div>
          <div className="result result__timezone">
            <h2 className="result__heading">Timezone</h2>
            <p className="result__paragraph">UTC {queryIp.location.timezone}</p>
          </div>
          <div className="line"></div>
          <div className="result result__isp">
            <h2 className="result__heading">ISP</h2>
            <p className="result__paragraph">{addLineBreak(queryIp.isp)}</p>
          </div>
        </>
      }
    </div>

  )
}

export default ResultBox;