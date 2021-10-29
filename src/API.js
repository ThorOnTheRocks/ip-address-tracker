import { BASE_SEARCH } from './config';

const fetchIpGeo = async (ipAddress) => {
  const endpoint = `${BASE_SEARCH}${ipAddress}`;
  let headers = {};
  return await (await fetch(endpoint, {
    method: "GET",
    mode: "cors",
    headers: headers
  })).json();
}

export default fetchIpGeo;
