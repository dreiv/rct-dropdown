import React, { Component } from 'react'
import data from '../data.json'
import './Dropdown.css'

export default class Dropdown extends Component {
	constructor(props) {
		super(props)

		this.state = { toggled: false }
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside)
	}

	setWrapperRef = node => {
		this.wrapperRef = node
	}
	wrapperRef = null

	handleToggle = () => {
		this.setState(prevState => ({ toggled: !prevState.toggled }))
	}

	handleClick = name => {
		console.log('clicked: ', name)
		this.setState(prevState => ({ toggled: !prevState.toggled }))
	}

	handleClickOutside = evt => {
		if (
			this.state.toggled &&
			this.wrapperRef &&
			!this.wrapperRef.contains(evt.target)
		) {
			this.setState({ toggled: false })
		}
	}

	render() {
		const { toggled } = this.state
		const btnText = toggled ? '-' : '+'

		return (
			<div ref={this.setWrapperRef} className="wrapper">
				<button onClick={this.handleToggle}>{btnText}</button>
				{toggled && (
					<ul className="items">
						{data.map(({ name }, idx) => (
							<li key={idx} onClick={this.handleClick.bind(this, name)}>
								{name}
							</li>
						))}
					</ul>
				)}
			</div>
		)
	}
}
