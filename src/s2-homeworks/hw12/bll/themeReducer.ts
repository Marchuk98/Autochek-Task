const SET_THEME_ID = 'SET_THEME_ID'

export const initState = {
    themeId: 1,
}


export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case SET_THEME_ID:{
            return {...state,themeId:action.id}
        }

        default:
            return state
    }
}

type ActionType = changeThemeIdType

type changeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id:number) => {
    return{
        type: SET_THEME_ID,
        id
    }as const
}
