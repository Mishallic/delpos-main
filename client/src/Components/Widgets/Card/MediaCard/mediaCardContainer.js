import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import CardMedia from './mediaCard'



const styles = (theme) => ({
    rootContainer: {
        width: '80%',
        margin: 'auto',
    },
    card: {
        marginTop: 40,
        width: '80%',
        margin: 'auto',
        height: 400
    },
    media: {
        height: 220,
        backgroundSize: 'cover',
        [theme.breakpoints.down('md')]: {
            width: '80vh'
        },
    },
    root: {
        marginBottom: '30px'
    },
    paper: {
        width: '100%',
        paddingTop: '70px',
        paddingBottom: '60px',
        // border:'1px dotted orange',
        margin: 'auto'
    }
})

class MediaCardContainer extends Component {

    state = {
        data: [

            {
                text: {
                    header: 'Delpos Scanner',
                    paragraph: 'Wireless induction charge without cable',
                    styles: {
                        header: {
                            component: 'h2',
                            variant: 'h5'
                        },
                        paragraph: {
                            component: 'p',
                        }
                    },
                    button: {
                        size: 'small',
                        variant: 'contained',
                        cta: 'Know more',
                        link: '/products',
                        color: 'primary'
                    }

                },
                media: {
                    url: 'images/scanner-ds.jpg',
                    alt: 'main',
                    styles: {
                        height: '140',
                    }
                }
            },

            {
                text: {
                    header: 'Thermal Printers',
                    paragraph: 'Fast. Reliable. Compatible.',
                    styles: {
                        header: {
                            component: 'h2',
                            variant: 'h5'
                        },
                        paragraph: {
                            component: 'p',
                        }
                    },
                    button: {
                        size: 'small',
                        variant: 'contained',
                        cta: 'Know more',
                        link: '/products',
                        color: 'primary'
                    }

                },
                media: {
                    url: 'images/printer4-ds.png',
                    alt: 'main',
                    styles: {
                        height: '140',
                    }
                }
            },
            {
                text: {
                    header: 'Cash Drawers',
                    paragraph: 'Heavy duty group of squamate reptiles, with over 6,000 species',
                    styles: {
                        header: {
                            component: 'h2',
                            variant: 'h5'
                        },
                        paragraph: {
                            component: 'p',
                        }
                    },
                    button: {
                        size: 'small',
                        variant: 'contained',
                        cta: 'Know more',
                        link: '/products',
                        color: 'primary'
                    }

                },
                media: {
                    url: 'images/drawer2-ds.jpg',
                    alt: 'main',
                    styles: {
                        height: '140',
                    }
                }
            },

            {
                text: {
                    header: 'Delpos POS Terminals',
                    paragraph: 'APEXA®G features modern and contemporary styling, powerful performance,superior touch display, multiple I/O interfaces and flexible installation.',
                    styles: {
                        header: {
                            component: 'h2',
                            variant: 'h5'
                        },
                        paragraph: {
                            component: 'p',
                        }
                    },
                    button: {
                        size: 'small',
                        variant: 'contained',
                        cta: 'Know more',
                        link: '/products',
                        color: 'primary'
                    }

                },
                media: {
                    url: 'images/apexa4-ds.png',
                    alt: 'main',
                    styles: {
                        height: '140',
                    }
                },
            },


        ]
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.rootContainer}>
                <CardMedia data={this.state.data} styles={this.props} ></CardMedia>
            </div>
        )
    }
}

export default withStyles(styles)(MediaCardContainer)