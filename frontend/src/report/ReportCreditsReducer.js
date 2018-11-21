const INITIAL_STATE = {
    list: [],
    description: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REPORT_FETCHED':
            return{ ...state, list: action.payload.data }
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}