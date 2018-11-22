import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getList(month, year) {
    let REPORT_URL = BASE_URL + "/billingCycles"

    if (month && year) {
        REPORT_URL= BASE_URL + "/billingCycles?name=" + month + "&year=" + year
    } else if (month) {
        REPORT_URL= BASE_URL + "/billingCycles?name=" + month
    } else if (year){
        REPORT_URL= BASE_URL + "/billingCycles?year=" + year
    }

    const request = axios.get(REPORT_URL)
        
    return{
        type: 'REPORT_FETCHED',
        payload: request
    }
}

export const changeDescription = (event, type) => ({
    type: type,
    payload: event.target.value
})