//This component simply puts text in a colored paper
//its position can be added as a props when used in various locations

import React, { Component } from 'react'
import Bridge from './bridge'

//MUI
import { withStyles } from '@material-ui/core/styles'
//

const styles = (theme) => ({

    container: {
        margin: 'auto',
        height: 'auto',
        width: '50%'
    },

    paper: {
        borderRadius: '15px',
        margin: 'auto',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        height: '40px',
        background: '#0d356d'
    },
    paperText: {
        color: 'white',
        fontSize: '25px',
        fontWeight: 'bolder',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px'
        },
    }
})


class BridgeContainer extends Component {

    render() {
        return (
            <Bridge text={this.props.text} root={this.props.root} styles={this.props} ></Bridge>
        )
    }
}



export default withStyles(styles)(BridgeContainer)