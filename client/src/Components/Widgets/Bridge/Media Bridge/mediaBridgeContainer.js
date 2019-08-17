import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MediaBridge from './mediaBridge'


const styles = () => ({
    root: {

    },

})

class MediaBridgeContainer extends Component {

    state = {

    }

    render() {
        return (
            <span>
                <MediaBridge bgi={this.props.bgi} styles={this.props.styles}></MediaBridge>
            </span>
        )
    }
}



export default withStyles(styles)(MediaBridgeContainer)