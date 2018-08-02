import React, { Component } from 'react'
import data from '../data.json'
import './Dropdown.css'

export default class Dropdown extends Component {
	constructor(props) {
		super(props)

		this.state = { toggled: false }
	}

	handleToggle = () => {
		this.setState(prevState => ({ toggled: !prevState.toggled }))
	}

	handleClick = evt => {
		console.log('clicked')
	}

	render() {
		const { toggled } = this.state
		const btnText = toggled ? '-' : '+'
		const ulStyle = !toggled ? { display: 'none' } : null

		return (
			<React.Fragment>
				<button onClick={this.handleToggle}>{btnText}</button>
				<ul className="items" style={ulStyle}>
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
