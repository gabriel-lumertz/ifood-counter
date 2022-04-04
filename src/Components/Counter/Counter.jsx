function Counter() {
    let quantity = 10

    function upQuantity() {
        quantity = quantity + 1
        document.getElementById("counter-box").innerHTML = quantity
    }

    function downQuantity() {
        quantity = quantity -1
        document.getElementById("counter-box").innerHTML = quantity
    }

    return(
        <>
            <button onClick={downQuantity}>Diminuir</button>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </>
    )
}

export default Counter