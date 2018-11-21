import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getList(description) {
    const request = axios.get(`${BASE_URL}/billingCycles?name=${description}`)
    return{
        type: 'REPORT_FETCHED',
        payload: request
    }
}

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})