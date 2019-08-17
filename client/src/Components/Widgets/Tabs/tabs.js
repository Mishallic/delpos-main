import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import ContainerCardContainer from '../Card/ContainerCard/containerCardContainer';
import CardContainer from '../Card/Txt_ImgCards/cardContainer';
import CarouselContainer from '../Steppers/pureReactCarousel/CarsouselContainer';
import { Grid, Paper, Tabs, Tab, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function TabContainer({ children, styles }) {
  return (
    <ContainerCardContainer
      styles={styles}
      element={children}>
    </ContainerCardContainer>
  );
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '100px',
    padding: '40px'
  },
});

class CenteredTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { classes, theme } = this.props;
    let id = this.props.styles.match.params.id
    const data = this.props.data

    return (
      <Paper className={classes.root}>
        <Typography align='center' variant='h2'>
          {data.products[id].title}
        </Typography>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Specs" />
        </Tabs>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer styles={this.props.styles} dir={theme.direction}>
            <Grid container direction='column'>
              <Grid item xs={12} sm={12} md={12}>
                <CardContainer styles={this.props.styles} data={this.props.data[id]}></CardContainer>
              </Grid>
            </Grid>
          </TabContainer>

        </SwipeableViews>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <CarouselContainer images={data.products[id].images} styles={this.props.styles}></CarouselContainer>
          </div>
        </div>
      </Paper>
    );
  }
}



export default withStyles(styles, { withTheme: true })(CenteredTabs);