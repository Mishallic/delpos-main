//recieves data and outpts a card with image and text horizantally.
//not to be confused with the MediaCard component
//MediaCard is vertically and has one display and the card is clickable
//this component only displays data -unclickable=
//and it also recieves right, left display.

import React, { Component } from 'react'
import Card from './card'

class CardContainer extends Component {
    render() {
        return (
            <div>
                <Card data={this.props.data} styles={this.props.styles}></Card>
            </div>
        )
    }
}

export default CardContainer