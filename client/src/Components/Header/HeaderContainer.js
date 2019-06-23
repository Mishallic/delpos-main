import React, { Component } from 'react'
import Header from './Header'

//MUI
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles'
//

const styles = theme => ({
  root: {
    width: '100%',
    zIndex:2,
    position:'fixed',
    top:0,
    overflow: 'hidden'
  },
  appBar:{
    transition: 'transform 1s ease'
  },
  grow: {
    flexGrow:1,
    width:450
  },
  
  menuLogo:{
    width:'165px'
  },
  
  itemButton:{
    fontWeight:'bold',
    fontSize:'16px',
    color:'rgba(0, 0, 0, .85)',
    borderTop:'3px solid transparent',
    '&:hover': {
      color:'black',
      borderTop:'3px #465E9C solid',
    }
  },
  itemButtonLink:{
    textDecoration:'none',
    outline:'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class HeaderContainer extends Component{
  
  state={
    anchorEl: null,
    mobileMoreAnchorEl: null,
    isTop: true,
    value: 0,
  }
  
  
  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  
  componentDidMount(){
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 150;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
        
      }
    });
  }
  
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  //closes menu when icon is clicked
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };
  //opens mobile-view menu
  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };
  //closes mobile view menu
  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  
  
  render(){
    return(
      <div>
        <Header 
        anchorEl={this.state.anchorEl}
        mobileMoreAnchorEl={this.state.mobileMoreAnchorEl}
        state={this.state}
        styles={this.props}
        handleMenuClose={this.handleMenuClose}
        handleMobileMenuClose={this.handleMobileMenuClose}
        handleProfileMenuOpen={this.handleProfileMenuOpen}
        handleMobileMenuOpen={this.handleMobileMenuOpen}
        handleChange = {this.handleChange}
        >
        </Header>
      </div>
      )
    }
  }
  
  
  export default withStyles(styles)(HeaderContainer)