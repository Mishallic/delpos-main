import React from 'react';
//MUI
import {Card, CardContent, CardMedia, Typography, Grid} from '@material-ui/core';
//


function MediaControlCard(props) {
  const { classes } = props.styles;
  //maps over main data and passes it to templating function
  const structurize = () => {
    return props.data.cardData.map( (item, i) => (
      <span key={i}>{template(item)}</span>
    ))
  }

  //checks wether the direction of the card is right to left or left to right and renders it
  const template = (item) => {
  
    let template=null
    switch(item.direction){
      case('right'):
      template=( <Card elevation={item.elevation} className={classes.TICcard}>
        <Grid container direction='row'>
            <Grid className={classes.TICcontent} item md={6} sm={12} xs={12}>
              <Grid container  direction='column'>
                <CardContent>
                  <Grid item  md={6} sm={12} xs={12}>
                    <Typography component={item.header.component} variant={item.header.variant}>
                      {item.header.text}
                    </Typography>
                  </Grid>
                  <Grid item  md={12} sm={12} xs={12}>
                    <Typography variant="subtitle1" color="textSecondary">
                  {item.paragraph.text}
                    </Typography>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>  
          
            <Grid item md={6} sm={6} xs={6}>
              <CardMedia
                className={classes.TICcover}
                image={item.img.static}
                title="image"
              />
            </Grid>
          </Grid>
        </Card>)
      break
      case('left'):
      template= ( <Card elevation={item.elevation} className={classes.TICcard}>

        <Grid container direction='row'>

            <Grid className={classes.TICimage} item md={6} sm={12} xs={12}>
              <CardMedia
                className={classes.TICcover}
                image={item.img.static}
                title="image"
              />
            </Grid> 

            <Grid className={classes.TICcontent} item md={6} sm={12} xs={12}>
              <Grid container direction='column'>
                <CardContent >
                  <Grid item md xs>
                    <Typography component={item.header.component} variant={item.header.variant}>
                      {item.header.text}
                    </Typography>
                  </Grid>
                  <Grid item  md={12} sm={12} xs={12}>
                    <Typography variant="subtitle1" color="textSecondary">
                  {item.paragraph.text}
                    </Typography>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>  

          </Grid>
        </Card>)
      break
      default:
      template= null
    }
    return template 
    }


    return (
      <div>
        {structurize()}
      </div>
  );
}


export default MediaControlCard