import React from 'react'

//MUI
import Grid from '@material-ui/core/Grid'
//


const Footer = (props) => {
    const { classes } = props.styles

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Grid container spacing={40}>
                    <Grid item lg={12} md={12} xs={12}>
                        <div className={classes.logoContainer} >
                            <img className={classes.logo} src='images/Untitled.png' alt='logo'></img>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}


export default Footer