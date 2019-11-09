export const listNotice = () => {
    return {
        type: 'LIST_NOTICE'
    }
};

export const addNotice = (text) => {
    return {
        type: 'ADD_NOTICE',
        text
    }
};

export const editNotice = (text) => {
    return {
        type: 'EDIT_NOTICE',
        text
    }
};

export const deleteNotice = (index)=> {
    return {
        type: 'DELETE_NOTICE',
        index
    }
};