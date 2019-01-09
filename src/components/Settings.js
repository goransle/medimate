import React, { Component } from 'react'

export default class Settings extends Component {
    state = {
        breatheIn : 2,
        holdIn: 2,
        breatheOut: 2,
        holdOut: 2
    }
    onChange = (e) => this.setState({ [e.target.name]: Number(e.target.value) })
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        this.props.updateSettings(this.state)
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="in">In</label>
                    <input onChange={this.onChange} type="range" name="breatheIn" min="1" max="12" defaultValue="2" />
                    <span>{this.state.breatheIn}</span>
                </div>
                <div>
                    <label htmlFor="holdIn">Hold in</label>
                    <input onChange={this.onChange} type="range" name="holdIn" min="1" max="12" defaultValue="2" />
                    <span>{this.state.holdIn}</span>
                </div>
                <div>
                    <label htmlFor="in">Out</label>
                    <input onChange={this.onChange} type="range" name="breatheOut" min="1" max="12" defaultValue="2" />
                    <span>{this.state.breatheOut}</span>
                </div>
                <div>
                    <label htmlFor="holdOut">Hold out</label>
                    <input onChange={this.onChange} type="range" name="holdOut" min="1" max="12" defaultValue="2" />
                    <span>{this.state.holdOut}</span>
                </div>
                <input type="submit" value="Update"/>
            </form>
        )
    }
}

