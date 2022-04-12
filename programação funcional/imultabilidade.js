const cart = {
    quatity:2 ,
    total:200
}

// bad 👎🏻
cart.quatity =3 

//good 
const newCart = {cart, quatity:3 }

// exemplos em React JS 
const [amount, setAmount] = useState(0)

//bad 👎🏻
amount =2 

// good 
setAmount(2)