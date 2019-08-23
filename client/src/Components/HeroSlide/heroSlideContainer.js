import React, { Component } from 'react'
import HeroSlide from './heroSlide'

//MUI
import { withStyles } from '@material-ui/core/styles';
//

const styles = (theme) => ({
    root: {
        position: 'absolute',
        height: '100%',
        width: '99%',
        top: 0
    },
    heroContainer: {
        height: '100%',
        color: '#f1f1f1',
        top: 0,
        opacity: '.7'
    },
    heroImage: {
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        top: 10,

    },
    videoPlayer: {
        height: '100%',
        width: '100%',
        top: 0
    }
})

class HeroSlideContainer extends Component {


    state = {
        data: {
            header: 'Grow your business securley with Delpos.',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum purus at accumsan viverra.',
            button: {
                pri: 'See Products',
                sec: 'Visit Us'
            }
        }
    }
    render() {

        return (
            <div>
                <HeroSlide data={this.props.data} styles={this.props.styles}></HeroSlide>
            </div>
        )
    }
}

export default withStyles(styles)(HeroSlideContainer)