const TOGGLE_PRELOADING = 'TOGGLE_PRELOADING'
const initState: InitStateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case TOGGLE_PRELOADING: {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => ({type: TOGGLE_PRELOADING, loading})
type LoadingType = ReturnType<typeof loadingAC>
type ActionsType = LoadingType
type InitStateType = {
    loading: boolean
}