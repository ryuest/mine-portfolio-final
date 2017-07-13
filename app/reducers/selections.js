export default function(state = [], action) {

    switch (action.type) {
        case "ADD_SELECTION":
            {
                const addSelectionToList = {
                    id: action.selection.id,
                    name: action.selection.name,
                    price: action.selection.price,
                    eventName: action.selection.eventName
                }
                if (!shouldUpdate(state, action.selection.id)) {
                    return [
                        ...state, {
                            selection: addSelectionToList
                        }
                    ];
                } else {
                    return state;
                }
            }

        case 'REMOVE_SELECTION':
            const selectionToRemove = findIndex(state, action.selection.id)
            return [
                ...state.slice(0, selectionToRemove),
                ...state.slice(selectionToRemove + 1)
            ]

        case 'CLEAR_ALL_SELECTIONS':
            return [];

        default:
            return state;
    }
}

function shouldUpdate(state, id) {
    let found = false
    if (state.length > 0) {
        state.map((selections) => {
            if (selections.selection.id === id) {
                found = true
            }
        })
    }
    return found
}

function findIndex(state, id) {
    let found
    let i = 0
    if (state.length > 0) {
        state.map((selections) => {
            if (selections.selection.id === id) {
                found = i
            }
            i++
        })
    }
    return found
}
