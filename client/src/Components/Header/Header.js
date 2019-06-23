import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid'
import Tab from '@material-ui/core/Tab'

const Header = (props) => {
    
    const { mobileMoreAnchorEl } = props.state;
    const { classes } = props.styles;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    const menuItems = [
        {name:'Home', link:'/'},{name:'Products', link:'/products'},{name:'Contact Us', link:'/contactus'}
    ]
    
    const displayMenuItems = () => {
        return menuItems.map( (item,i) => {
            return(
                <Grid item align='center' xs key={i}>
                <Link className={classes.itemButtonLink} to={item.link}>
                <Tab
                fullWidth={false}
                textColor='secondary'
                className={classes.itemButton}
                style={itemStyle(props.state.isTop)}
                label={item.name}>
                </Tab>
                </Link>
                </Grid>
                )
            })
        }
        
        const barStyle = (condition) => (
            condition?
            {background:'rgba(255, 255, 255, .0)'}
            :
            {background:'rgba(5, 5, 5, 1)'}
            )
            const itemStyle = (condition) => (
                condition?
                {color:'rgba(0, 0, 0, .87)'}
                :
                {color:'rgba(255, 255, 255, 1)', fontWeight:'normal'}
                )
                const rootStyle = (condition) => (
                    condition?
                    null
                    :
                    {height: 55}
                    )
                    
                    const renderMobileMenu = (
                        <Menu
                        anchorEl={mobileMoreAnchorEl}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={isMobileMenuOpen}
                        onClose={props.handleMenuClose}
                        >
                        
                        <MenuItem onClick={props.handleMobileMenuClose}>
                        <Link to='/products'>
                        <Typography>Products</Typography>
                        </Link>
                        </MenuItem>
                        
                        <MenuItem onClick={props.handleProfileMenuOpen}>
                        <Link to='/contactus'>
                        <Typography>Contact Us</Typography>
                        </Link>
                        </MenuItem>
                        </Menu>
                        );
                        
                        return (
                            <div className={classes.root} style={rootStyle(props.state.isTop)}>
                            <AppBar className={classes.appBar} style={barStyle(props.state.isTop)}  position="static">
                            <Toolbar>
                            
                            <Link  className={classes.itemButtonLink} to='/'>
                            <img className={classes.menuLogo} src='images/Delpos1Logo.png' alt='logo'></img>
                            </Link>
                            
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                            
                            <Grid container>
                            {displayMenuItems()}
                            </Grid>
                            
                            </div>
                            <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={props.handleMobileMenuOpen} color="secondary">
                            <MoreIcon />
                            </IconButton>
                            </div>
                            </Toolbar>
                            </AppBar>
                            {renderMobileMenu}
                            </div>
                            );
                        }
                        export default Header
                        
                        