import actionType from './../actionType';
export const changeTitle = (title)=>{
    return {
        type: actionType.MENU_TITLE,
        title: title
    }
}