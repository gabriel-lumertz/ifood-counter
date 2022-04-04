import { useState } from 'react'

function Smartcounter() {
    const [quantity, changeQuantity] = useState(1)
    return(
        <>
            <button onClick={()=> changeQuantity(quantity - 1)}>Diminuir</button>
            <h1>{quantity}</h1>
            <button onClick={()=> changeQuantity(quantity + 1)}>Aumentar</button>        
        </>
    )
}

export default Smartcounter