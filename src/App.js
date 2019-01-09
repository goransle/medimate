import React, { Component } from 'react';
import Circle from './components/Circle'
import Settings from './components/Settings'
import './App.css';

class App extends Component {
	state = {
		radius: 25,
		time: 0,
		step: "grow",
		settings: {
			breatheIn: 2,
			breatheOut: 2,
			holdIn: 2,
			holdOut: 2,
		},
		started: false,
		start: Date.now(),
		animating: false
	}
	grow = () => {
		const start = Date.now()
		var interval = 15;
		var timer = setInterval(() => {
			var { radius, settings } = this.state
			var remaining = (settings.breatheIn * 1000) - (Date.now() - start)
			console.log(remaining)
			var increase = ((50 - radius) * interval) / (remaining)
			if (radius < 50) {
				this.setState({ radius: radius + increase, animating: true })
			}
			if ((remaining <= 5)) {
				clearInterval(timer)
				this.setState({ radius: 50, step: "holdIn", animating: false })
			}
		}, interval);
	}
	shrink = () => {
		const start = Date.now()
		var interval = 15;
		var timer = setInterval(() => {
			var { radius, settings } = this.state
			var remaining = (settings.breatheOut * 1000) - (Date.now() - start)
			console.log(remaining)
			var decrease = ((radius - 25) * interval) / (remaining)
			if (radius > 25) {
				this.setState({ radius: radius - decrease, animating: true })
			}
			if ((remaining <= 5)) {
				clearInterval(timer)
				this.setState({ radius: 25, step: "holdOut", animating: false })
			}
		}, interval);
	}
	hold = (time, nextStep) =>{
		this.setState({animating: true})
		setTimeout(() => {
			this.setState({animating: false, step: nextStep})
		}, time * 1000);
	}
	start = () => {

		this.setState({ started: true, start: Date.now() })
		var { start } = this.state
		setInterval(() => {
			this.setState({ time: Date.now() - start })
			this.run();
		}, 10);
	}
	run = () => {
		if(!this.state.animating) {
			if (this.state.step === "grow") {
				this.grow()
			}
			if (this.state.step === "holdIn") {
				this.hold(this.state.settings.holdIn, "shrink")
			}
			if (this.state.step === "shrink") {
				this.shrink()
			}
			if (this.state.step === "holdOut") {
				this.hold(this.state.settings.holdOut, "grow")
			}
		}
	}
	addPercentage = (number) => {
		return number + "%"
	}

	updateSettings = (e) =>{
		this.setState({settings: e})
	}
	render() {
		var date = new Date(Date.now() - this.state.start)
		return (
			<div className="App">
				<Settings updateSettings={this.updateSettings}/>
				<Circle onClick={this.start} radius={this.addPercentage(this.state.radius)} />
				<h1>{date.getMinutes() + "m " + date.getSeconds(2) + "s"}</h1>
			</div>
		);
	}
}

export default App;
