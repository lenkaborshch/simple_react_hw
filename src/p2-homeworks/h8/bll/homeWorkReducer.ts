enum TYPE_FOR_ACTIONS {
    SORT = 'sort',
    CHECK = 'check'
}
export type UserType = {
    _id: number
    name: string
    age: number
}

type SortPeopleType = {
    type: TYPE_FOR_ACTIONS.SORT
    payload: string
}
type CheckPeopleType = {
    type: TYPE_FOR_ACTIONS.CHECK
    payload: number
}
type ActionsType = SortPeopleType | CheckPeopleType


export const sortPeople = (payload: string): SortPeopleType => ({type: TYPE_FOR_ACTIONS.SORT, payload})
export const checkPeople = (payload: number): CheckPeopleType => ({type: TYPE_FOR_ACTIONS.CHECK, payload})

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case TYPE_FOR_ACTIONS.SORT: {
            if(action.payload === 'up') return [...state].sort(sortFunc)
            if(action.payload === 'down') return [...state].sort(sortFunc).reverse()
            return state
        }
        case TYPE_FOR_ACTIONS.CHECK: {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}

function sortFunc(a: UserType, b: UserType) {
    let nameA = a.name.toLowerCase()
    let nameB = b.name.toLowerCase()
    return nameA === nameB
        ? 0
        : nameA < nameB ? -1 : 1
}