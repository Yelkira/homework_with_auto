import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let state1 = [...state]
            if(action.payload === "up"){

                return state1.sort((x,y)=> x.name.localeCompare(y.name))
            }
            return  state1.sort((x,y)=> y.name.localeCompare(x.name))
        }
        case 'check': {
            return state.filter(s=>s.age > action.payload)// need to fix
        }
        default:
            return state
    }
}

