import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

class App extends Component {

	// Стейт - JS-объект, который описывает то состояние,
	// в котором находится данный компонент
	state = {
		cars: [
			{name: 'Ford', year: 2018},
			{name: 'Audi', year: 2016},
			{name: 'Masda', year: 2010}
		],
		// Еще одно состояние для данного компонента:
		pageTitle: 'React Components'
	}
	// создаю функцию, которая будет выполняться по нажатию кнопки
	changeTitleHandler = (newTitle) => {

		// если надо изменить состояние на данной странице -
		// надо вызвать setState
		this.setState({
			pageTitle: newTitle
		})
	}
	handleInput = (event) => {
		console.log('change input', event.target.value);
		this.setState({
			pageTitle: event.target.value
		})
	}

	render() {
		const divStyle = {
			textAlign: 'center'
		}
		const cars = this.state.cars;

		return (
			<div style={divStyle}>
				<h1>{this.state.pageTitle}</h1>

				<input type="text" onChange={this.handleInput} />

				<button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
				<Car 
					name={cars[0].name} 
					year={cars[0].year} 
					// первый способ
					onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
				/>
				<Car 
					name={cars[1].name} 
					year={cars[1].year} 
					// второй способ
					onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
				/>
				<Car 
					name={cars[2].name} 
					year={cars[2].year} 
					onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
				/>
			</div>
		);
	}
}

export default App;
