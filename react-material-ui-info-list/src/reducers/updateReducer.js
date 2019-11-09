const initState = ['update-1', 'update-2', 'update-3'];

const updateReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LIST_UPDATE':
            return state;
        case 'ADD_UPDATE':
            return [
                ...state,
                action.text
            ];
        case 'EDIT_UPDATE':
            return [
                ...state,
                action.text
            ];
        case 'DELETE_UPDATE':
            const updates = [...state];
            updates.splice(action.index, 1);
            return updates;
        default:
            return state;
    }
};

export default updateReducer;