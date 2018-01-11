
const BACKEND_URL = 'http://localhost:3000';
export const REDUX_ACTIONS = {
    //saga action
    FETCHING:'FETCHING',
    FETCH_LATEST:'FETCH_LATEST',
    FETCHING_SUCCESS : 'FETCHING_SUCCESS',
    FETCHING_FAILURE:'FETCHING_FAILURE',
    //tutor redux action
    SET_TUTOR_DATA: "SET_TUTOR_DATA",
    HANDLE_TUTOR_DATA_FETCH_FAILURE: "HANDLE_TUTOR_DATA_FETCH_FAILURE",

}

export const ACTION_KEY ={

    TUTOR :"TUTOR"
}

export const ACTION_ATTR ={
    PAYLOAD:'payload'
}
export const URLS = {
    TUTOR: BACKEND_URL+'/tutor'
};
export const HTTP_METHODS = {
    GET: "GET",
    POST: "POST"
};
export const FETCH_KEYS = {
    MERCHANT_ID: 'merchantId',
    REGISTER_NO: 'registerNo',
    MAC_ADDRESS: 'macAddress'
};

export const HTTP_CODES = {
    SUCCESS: 200,
    INTERNAL_ERROR: 500,
    BAD_REQUEST: 400,
    NOT_AUTHENTICATED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
};
export const TIMEOUTS = {
    AUTH_REDIRECT: 1000,
    LOCAL_PROXY_SEND_RETRY: 1000,
    SECOND_IN_MILLIS: 1000
};
