import React from 'react';
import './CartItem.css'

function CartItem({id, updateQty, name, price, qty}){
	const addOne = () => updateQty(id, qty+1);
	const deleteOne = () => updateQty(id, qty-1);
	return(
		<div className="cart-item">
			<div>{name}</div>
			<div>
				<button
					onClick={deleteOne}
					disabled={qty <= 1}>-1</button>
				{qty}
				<button onClick={addOne}>+1</button>
			</div>
			<div>Rs. {price}</div>
		</div>
	)
}

export default CartItem;