import { incBonus,decBonus } from "../constants"

function increaseBonus() {
    return { type: incBonus }
}

function decreaseBonus() {
    return { type: decBonus }
}


export { increaseBonus, decreaseBonus };