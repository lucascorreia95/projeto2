const INITIAL_STATE = {
    list: [],
    month: '',
    year: '',
    click:''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REPORT_FETCHED':
            return{ ...state, list: action.payload.data, click:'true' }
        case 'MONTH_CHANGED':
            return { ...state, month: action.payload }
        case 'YEAR_CHANGED':
            return { ...state, year: action.payload }
        default:
            return state
    }
}