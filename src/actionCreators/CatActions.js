const loading = { type: "LOADING" };

export const loadCats = catData => {
    console.log("called")
    const cats = catData.map((url, indx) => ({id: indx+1, img: url, liked: false }))
    return { type: "LOAD_CATS", payload: cats }
};

export const toggleLikeCat = id => ({ type: "LIKE_CAT", payload: id });

export const handleError = err => {
    console.warn(err);
    return { type: "SET_ERROR", payload: err.message }
}

export const fetchCats = () => {
    return dispatch => {
        console.log("Dispatch is ", dispatch)
        dispatch(loading);
        fetch("https://dog.ceo/api/breeds/image/random/9")
            .then(r => r.json())
            .then(data => dispatch(loadCats(data.message)))
            .catch(err => dispatch(handleError(err)))
    };
};

// https://api.thecatapi.com/v1/images/search