export const listUpdate = () => {
    return {
        type: 'LIST_UPDATE'
    }
};

export const addUpdate = (text) => {
    return {
        type: 'ADD_UPDATE',
        text
    }
};

export const editUpdate = (text) => {
    return {
        type: 'EDIT_UPDATE',
        text
    }
};

export const deleteUpdate = (index)=> {
    return {
        type: 'DELETE_UPDATE',
        index
    }
};