import axios from "axios";
const api_key = '3D059490D00067BFAFD2459DA8F6E2C9C4B21D8E4233DD44E1B0B2CD81C70680'
export const getServers = async () => {
    try {
      const response = await axios.get('https://api.eventshock.ru/vpn/api/get-all/', {
        headers: {
          'X-API-Key': api_key,
        }
      });

    return response.data
    } catch (error) {
    }
  };
  export const getVpn = async (id:number) => {
    try {
      const response = await axios.get('https://api.eventshock.ru/vpn/api/get-vpn-' + String(id), {
        headers: {
          'X-API-Key': api_key,
        }
      });
    return response.data
    } catch (error) {
    }
  };