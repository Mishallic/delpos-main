import React from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Grid } from '@material-ui/core'

const CarouselTemplate = (props) => {
  const imgDisplay = () => (
    props.images.map((item, i) => (
      <Slide key={i}>
        <div className={classes.container}>
          <Image
            tag='img'
            className={classes.image}
            index={1}
            src={item.imgPath}></Image>
        </div>
      </Slide>
    ))
  )

  const { classes } = props.styles

  return (
    <Grid>
      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={1000}
        totalSlides={4}
        interval={3000}
        isPlaying={true}
      >
        <Slider style={{ width: 600 }}>
          {imgDisplay()}
        </Slider>
      </CarouselProvider>
    </Grid>
  );

}


export default CarouselTemplate