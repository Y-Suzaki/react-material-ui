const initState = ['info-1', 'info-2', 'info-3'];

const noticeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LIST_NOTICE':
            return state;
        case 'ADD_NOTICE':
            return [
                ...state,
                action.text
            ];
        case 'EDIT_NOTICE':
            return [
                ...state,
                action.text
            ];
        case 'DELETE_NOTICE':
            const notices = [...state];
            notices.splice(action.index, 1);
            return notices;
        default:
            return state;
    }
};

export default noticeReducer;