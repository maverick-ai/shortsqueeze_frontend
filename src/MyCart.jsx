import { useSelector,useState } from "react-redux";

function MyCart(props){
    const Cart=useSelector(state=>state.cart);
    const [CartItems, setCartItems] = useState([])

    useEffect(()=>{
        initialCartItems=[]

        setCartItems();
    }, [Cart]);


    return(<div className="container-lg">{CartItems}<div><h2>Total Amount</h2></div></div>);
}