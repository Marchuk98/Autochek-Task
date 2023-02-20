import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            let sortedNames =
                action.payload === 'up'
                    ? [...state.slice().sort((a, b) => a.name.localeCompare(b.name))]
                        : action.payload === 'down' ? [...state.slice().sort((a, b) => b.name.localeCompare(a.name))]
                            : state


            return sortedNames

        }
        case 'check': {

            return state.filter(el => el.age >= action.payload);

        }
    }
}
