const initialState = { 
    currentTrackerPosition : 1
}

const reducer = (state = initialState, action) => {
    console.log("in reducer type : " + action.type)
    console.log("in reducer value : " + action.changePos)
    if(action.type === "TRACKER_POS"){
        return{
            currentTrackerPosition : action.changePos
        }
    }
    return state
}

export default reducer