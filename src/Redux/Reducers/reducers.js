import { ADD } from "../Actions/actions"

export default function counter(state = 0, { type, payload }) {
    switch (type) {
        case ADD:
            return state + payload;
        default:
            return state
    }
}
