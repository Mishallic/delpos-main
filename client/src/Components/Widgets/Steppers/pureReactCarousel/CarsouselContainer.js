import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import SliderTemplate from './Carousel'


const styles = (theme) => ({
  image: {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      width: '30vh'
    },

  },
  contentCont: {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1',
    width: '100%',
    padding: '20px'
  },
  container: {
    margin: 'auto',
    width: '80vh',
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1'
  }
})

class CarouselContainer extends Component {

  render() {
    return (
      <SliderTemplate images={this.props.images} styles={this.props}></SliderTemplate>
    )
  }
}

export default withStyles(styles)(CarouselContainer)

