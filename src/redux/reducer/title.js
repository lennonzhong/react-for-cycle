import actionType from './../actionType';
const defaultState = {
    menu_title: '首页'
}

export default (state = defaultState, action) =>{
    let newState = state;
    switch (action.type) {
        case actionType.MENU_TITLE:
           return {
               ...state,
               menu_title: action.title
           }
        default:
            break;
    }
    return state
}