//this is the tokenBalances api

import axios from 'axios';

export const tokenBalances = async (address) => {
    try {
        const response = await axios.get(`https://api.seigr.network/getAddressInfo/${address}?apiKey=freekey`);
        return response.data.tokens;
    } catch (error) {
        console.log(error);
    }
}
