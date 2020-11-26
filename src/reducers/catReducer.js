const initState = {
    allCats: [],
    loading: false
}

function catReducer ( state = initState, action) {
    let indx;

    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true }
        case "LOAD_CATS":
            return { allCats: action.payload, loading: false }
        case "LIKE_CAT":
            const catToLike = state.allCats.find(d => d.id === action.payload);
            indx = state.allCats.indexOf(catToLike)
            const updatedCat = [
                ...state.allCats.slice(0, indx),
                { ...catToLike, liked: !catToLike.liked},
                ...state.allCats.slice(indx+1)
            ]
            return { ...state, allCats: updatedCat}
        default:
            return state
    }
}

export default catReducer;