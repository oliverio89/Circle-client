import ReactDOM from "react-dom"
import React, { Component } from "react"

const portalRoot = document.getElementById('portal')


export default class Portal extends Component {

    constructor() {
        super();
        this.el = document.createElement('div')


        this.componentDidMount = () => {
            portalRoot.appendChild(this.el)
        }

        this.componentWillUnmount = () => {
            portalRoot.removeChild(this.el)
        }
    }

    render() {
        const { children } = this.props
        return ReactDOM.createPortal(children, this.el)
    }
}

