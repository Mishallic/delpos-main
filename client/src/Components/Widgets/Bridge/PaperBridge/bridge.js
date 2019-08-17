import React from 'react'
import { Typography, Grid, Paper } from '@material-ui/core'

const Bridge = (props) => {

    const { classes } = props.styles

    return (
        <div className={props.root}>
            <Grid className={classes.container} alignItems='center' justify='center' container>
                <Grid className={classes.paperContainer} item xl>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography
                            className={classes.paperText}
                            align='center'>{props.text}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Bridge