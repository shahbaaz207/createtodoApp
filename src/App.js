import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/Header';
import Input from './components/Input';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<Index/>
				<Input/>
			
			</div>
		)
	}
}

export default App
