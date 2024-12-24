'use client'

import { useCounter } from "./CounterContext"

const Decrement = () => {
    const {decrement} = useCounter ();

    return (
        <button
        onClick={decrement}
        className="text-white font-black">-</button>
    )
}

export default Decrement