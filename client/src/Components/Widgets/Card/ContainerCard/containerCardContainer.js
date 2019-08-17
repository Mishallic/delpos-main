//This component acts as awrapper , it recieves an element and places it in a paper

import React, { Component } from 'react'
import ContainerCard from './containerCard'



class ContainerCardContainer extends Component {

    render() {
        return (
            <ContainerCard styles={this.props.styles} element={this.props.element}></ContainerCard>
        )
    }
}



export default ContainerCardContainer