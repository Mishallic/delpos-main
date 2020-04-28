import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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