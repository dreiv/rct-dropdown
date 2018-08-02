import React, { Component } from 'react'
import data from '../data.json'
import './Dropdown.css'

export default class Dropdown extends Component {
	handleClick = evt => {
		console.log('clicked')
	}

	render() {
		return (
			<React.Fragment>
				<button>+</button>
				<ul className="items">
					{data.map(({ name }, idx) => (
						<li key={idx} onClick={this.handleClick}>
							{name}
						</li>
					))}
				</ul>
			</React.Fragment>
		)
	}
}
