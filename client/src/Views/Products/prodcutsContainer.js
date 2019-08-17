import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Products from './products'

const styles = (theme) => ({
  //
  //threesTable
  //
  ThreesTableRoot: {
    width: '100%',
    marginBottom: '40px',
    [theme.breakpoints.down('sm')]: {
    },
  },

  ThreesTableContainer: {
    marginTop: 90,
    width: '80%',
    padding: '40px',
    paddingTop: '50px',
    paddingBottom: '50px',
    margin: 'auto'
  },

  ThreesTabletableItem: {
    webkitAnimation: 'fadeIn 1s',
    animation: 'fadeIn .4s',
  },

  ThreesTableimage: {
    position: 'relative',
    height: 225,
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 115,
    },
    '&:hover, &$ThreesTableimageSrc': {
      transform: 'scale(1.1)'
    },
    transition: 'transform .5s ease',
  },

  ThreesTableimageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  ThreesTableimageSrc: {
    borderRadius: '5px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundPosition: 'center 40%',
    backgroundRepeat: 'no-repeat',
    transition: 'transform .5s ease',
  },
  ThreesTableLabel: {
    padding: 18,
    fontSize: 16,
    fontWeight: 'bolder'
  },

  //
  //bridge
  //
  root1: {
    position: 'relative',
    width: '70%',
    left: '0',
    right: 0,
    top: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
    [theme.breakpoints.down('lg')]: {
      top: 100
    },
    [theme.breakpoints.down('md')]: {
      top: 100
    },
    [theme.breakpoints.down('xs')]: {
      top: 100
    },
  },
  //
  //

})



class ProductsContainer extends Component {

  state = {
    //
    //products
    //
    products: {
      data: [
        {
          url: 'images/printer4-ds.png',
          label: 'Delpos Thermal Printer',
          link: 'products/printer'
        },
        {
          url: 'images/apexa1-ds.png',
          label: 'Delpos APEXA',
          link: 'products/monitors'
        },
        {
          url: 'images/delpos3-ds.jpg',
          label: 'Delpos Cash Drawer',
          link: 'products/drawer'
        },
        {
          url: 'images/scanner-ds.jpg',
          label: 'Delpos Scanner',
          link: 'products/scanners'
        },

      ]
    }
    //
    //
  }

  render() {
    return (
      <Products data={this.state} styles={this.props}></Products>
    )
  }
}

export default withStyles(styles)(ProductsContainer)