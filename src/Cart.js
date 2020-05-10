import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.css'

function Cart({initialItems}){
	const initialState = JSON.parse(window.localStorage.getItem('items'))
	const [items, setItems] = useState(initialState || initialItems);
	
	useEffect(()=>{
		window.localStorage.setItem('items', JSON.stringify(items));
	}, [items])

	const updateQty = (id, newQty) => {
		const newItems = items.map(item => {
			if(item.id === id) return {...item, qty: newQty}
			return item;
		})
		setItems(newItems);
	}

	const grandTotal = items.reduce((total, item)=>(total + item.price*item.qty), 0);

	return (
		<div className="cart-container">
			<h1>Shopping cart</h1>
				{items.map((item) => (
					<CartItem
						key={item.id}
						updateQty={updateQty}
						{...item}/>
				))}
				<h2><span>Total amount:</span> {grandTotal}</h2>
		</div>
	)
}

export default Cart;
