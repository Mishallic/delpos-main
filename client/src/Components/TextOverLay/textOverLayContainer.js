import React, { Component } from 'react'
import TextOverLay from './textOverLay'

class TextOverLayContainer extends Component {

    render() {
        return (
            <TextOverLay
                style={this.props.style}
                top={this.props.top}
                data={this.props.data}
                styles={this.props.styles}>
            </TextOverLay>
        )
    }
}

export default TextOverLayContainer
