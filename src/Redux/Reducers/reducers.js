import { ADD } from "../Actions/actions"

export default function counter(state = 5, { type, payload }) {
    switch (type) {
        case ADD:
            return state + payload;
        default:
            return state
    }
}
