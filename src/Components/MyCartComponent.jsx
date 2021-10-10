import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import DropDown from "./DropDown";

function CartRow(props){
    return (
    <div>
    <div className="row">
        <div className="col-sm-8">{props.title}</div>
        <div className="col-sm-2"><DropDown CurrentQuantity={props.quantity} MinQuantity={props.MinQuantity} MaxQuantity={props.MaxQuantity} /></div>
        <div className="col-sm-2">{props.price}</div>
    </div>
    <hr />
    </div>);
}

export default CartRow;