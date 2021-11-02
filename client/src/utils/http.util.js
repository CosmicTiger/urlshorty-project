import axios from 'axios'
import CONSTANTS_COLLECTION from './constants.util'

const { BASE_URL_SERVER, API_VERSION } = CONSTANTS_COLLECTION

/**
 * Hook for make REST petitions
 * @param {String} pathUrl
 * @param {Option} options
 * @returns {Array} [Axios, CancelPetition]
 */
const Http = () => {
    const BASE_URL_SERVER_VERSIONED = BASE_URL_SERVER + '/' + API_VERSION + '/'

    const _axios = axios.create({
        baseURL: BASE_URL_SERVER_VERSIONED,
        headers: {},
    });

    return _axios;
}

export default Http;
