import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'

const ThreeTable = (props) => {

    const { classes } = props.styles

    //organizes data and sends it to the presentational template
    const structurize = () => {
        return props.data.data.map((item, i) => (
            renderItems(item, i)
        ))
    }

    const renderItems = (item, i) => (
        <Grid key={i} item lg={props.layout} xs={12}>
            <div className={classes.ThreesTabletableItem}>
                <Link to={item.link}>
                    <ButtonBase
                        focusRipple
                        className={classes.ThreesTableimage}
                    >
                        <div
                            className={classes.ThreesTableimageSrc}
                            style={{
                                backgroundImage: `url(${item.url})`,
                            }}
                        />

                        <span className={classes.ThreesTableimageBackdrop} />
                        <span className={classes.ThreesTableimageButton}>
                            <Typography
                                component="span"
                                variant="h5"
                                color="inherit"
                                className={classes.ThreesTableimageTitle}
                            >
                                <p>{item.title}</p>
                                <span className={classes.ThreesTableimageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                </Link>
                <Typography className={classes.ThreesTableLabel} variant='h6' align='center'>{item.label}</Typography>
            </div>
        </Grid>
    )

    return (
        <div className={classes.ThreesTableRoot}   >
            <Paper elevation={12} className={classes.ThreesTableContainer}>
                <Typography className={classes.ThreesTabletableTitle} color='secondary' variant='h4' align='center'></Typography>
                <Grid container spacing={40}>
                    {structurize()}
                </Grid>
            </Paper>
        </div>
    )
}

export default ThreeTable