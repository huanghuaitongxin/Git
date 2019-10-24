import * as types from "../action-types"
//action此时里面包含了type和payload
export default function reducer(state = { number: 200 }, action) {
    switch (action.type) {
        case types.ADD2:
            return { number: state.number + action.payload }
        case types.SUB2:
            return { number: state.number - action.payload }
        default:
            return state;
    }
}