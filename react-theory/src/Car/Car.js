import React from 'react';

export default () => (
	<div>
		<p>This is dynemic component</p>
		<p>Числа = <strong>{Math.round(Math.random() * 100)}</strong></p>
	</div>
)

// function car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// __ СОКРАЩЕННО __
// const car = () => {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// __ БОЛЕЕ СОКРАЩЕННО __
// const car = () => <h2>This is car component</h2>

// const car = () => (
//     <div>
//         This is car component
//         <strong>test</strong>
//     </div>
// )
// export default car;


// __ МОЖНО ОБЪЕДИНИТЬ С ЭКСПОРТОМ __
// === ПЕРЕНОШУ ВВЕРХ ===
// export default () => (
//     <div>
//         This is car component
//         <strong>test</strong>
//     </div>
// )
