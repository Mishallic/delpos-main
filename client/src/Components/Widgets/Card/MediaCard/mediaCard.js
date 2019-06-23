import React from 'react'
import {NavLink} from 'react-router-dom'

//MUI
import 
  {Card, 
  CardActionArea, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  CardActions, 
  Grid} 
from '@material-ui/core'
//

const MediaCard = (props) => {

  const { classes } = props.styles

    //mapping over the ain data dneeded n the card and passes it to the presentational template
    const structurize = () => {
        return props.data.map( (item,i) => (
            <Grid item md={6} key={i}>{template(item)}</Grid>
        ))
    }

    //recieves data and presents it as jsx
    const template = (item) => {
        
        let text = item.text
        let media = item.media
        return(
            <Card  className={classes.card}>
              <NavLink style={{textDecoration:'none'}} to={text.button.link}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={media.url}
                    title="Product"
                  />
                  <CardContent>
                    <Typography gutterBottom {...text.styles.header}>
                      {text.header}
                    </Typography>
                    <Typography component={text.styles.paragraph.component}>
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


    return(
        <div className={classes.root}>
            <Grid container direction='row' spacing={40}>
              {structurize()}
            </Grid>
        </div>
    )
}

export default MediaCard