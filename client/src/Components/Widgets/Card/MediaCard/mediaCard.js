import React from 'react'
import { NavLink } from 'react-router-dom'

//MUI
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
//

const MediaCard = (props) => {

  const { classes } = props.styles

  //mapping over the ain data dneeded n the card and passes it to the presentational template
  const structurize = () => {
    return props.data.map((item, i) => (
      <Grid item md={6} key={i}>{template(item)}</Grid>
    ))
  }

  //recieves data and presents it as jsx
  const template = (item) => {
    
    let text = item.text
    let media = item.media

    return (
      <Card className={classes.card}>
        <NavLink style={{ textDecoration: 'none' }} to={text.button.link}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={media.url}
              title="Product"
            />
            <CardContent>
              <Typography variant='h6' gutterBottom>
                {text.header}
              </Typography>
              <Typography className='caption_ts'>
                {text.paragraph}
              </Typography>
            </CardContent>
          </CardActionArea>
        </NavLink>

        <CardActions>
          <NavLink to={text.button.link}>
            <Button {...text.button}>
              {text.button.cta}
            </Button>
          </NavLink>
        </CardActions>
      </Card>


    )
  }


  return (
    <div className={classes.root}>
      <Grid container direction='row' spacing={40}>
        {structurize()}
      </Grid>
    </div>
  )
}

export default MediaCard