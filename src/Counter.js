import React, { useState } from 'react';

function Counter({step}){
	const [count, setCount] = useState(0);
	return(
		<>
			<h3>{count}</h3>
			<button onClick={() => setCount(count+step)}>+{step}</button>
		</>
	)
}

export default Counter;