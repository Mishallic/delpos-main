import container from '../main'

const homeStyle = (theme) => ({
  ...container,
  root1: {
    position: 'relative',
    width: '60%',
    left: 0,
    right: 0,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  root2: {
    position: 'relative',
    width: '60%',
    left: '0',
    right: 0,
    top: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  overlayRoot: {
    position: 'relative',
    zIndex: 2,
    top: 80,
  },
  root: {
    position: 'absolute',
    height: '100%',
    width: '99%',
    top: 0,

  },
  heroContainer: {
    height: '100%',
    color: '#f1f1f1',
    top: 0,
    opacity: '.9',

  },
  heroImage: {
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: 0,
    width: '99%',
    height: '92vh',
    maxHeight: '1000px'
  },
  videoPlayer: {
    position: 'absolute',
    width: '99%',
    top: 0
  },


  parallex: {
    minHeight: '250px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  TOLheader: {
    height: 'auto',
    borderRadius: '10px',
    fontSize: '42px',
    color: '#DDDEE0',
    textShadow: '2px 2px rgba(0, 0, 0, .4)',
    fontWeight: 'bold',
    webkitAnimation: 'fadeInDown 1s',
    animation: 'fadeInDown .4s',

  },
  TOLparagraph: {
    fontSize: '18px',
    fontWeight: 'normal',
    color: 'rgba(255,255,255,1)',
    webkitAnimation: 'fadeInLeft .5s',
    animation: 'fadeInLeft .4s',
  },
  TOLbutton: {
    height: '35px',
    fontSize: '15px',
    fontWeight: 'bolder',
    webkitAnimation: 'fadeIn .5s',
    animation: 'fadeInRight .4s',
  },
  TOLtextRoot: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    width: '90%',
    margin: 'auto',
    marginTop: '20vh'
  },

  //
  //

  //
  //threesTable
  //

  ThreesTableRoot: {
    width: '100%',
    marginTop: '0px',
    marginBottom: '40px',
  },

  ThreesTableContainer: {
    width: '80%',
    padding: '40px',
    paddingTop: '50px',
    paddingBottom: '50px',
    // border:'1px dotted orange',
    margin: 'auto'
  },

  ThreesTabletableItem: {
    webkitAnimation: 'fadeIn 1s',
    animation: 'fadeIn .4s',
    //     height:'auto',
  },



  ThreesTableimage: {
    position: 'relative',
    height: 225,
    width: '100%',
    overflow: 'hidden',
    '&:hover, & $ThreesTableimageBackdrop ': {

      '& $ThreesTableimageMarked ': {
        opacity: 0,

      },
      '& $ThreesTableimageBackdrop': {

        opacity: 0.15
      },
      '& $ThreesTableimageTitle': {
        border: '1px solid currentColor',
        opacity: 0
      },
      '& $ThreesTableimageSrc': {
        transform: 'scale(1.2)',
      }
    },
  },

  ThreesTableimageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  ThreesTableimageSrc: {
    transition: 'transform .5s ease',
    borderRadius: '15px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',

  },
  ThreesTableimageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
    borderRadius: '15px'
  },
  ThreesTableimageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  ThreesTableimageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  //
  //

  ContainerCardPaper: {
    padding: '25px 0px',
    width: '80%',
    margin: 'auto',
  },
  ContainerCardPaperRoot: {
    position: 'relative',
    marginTop: '-30px',
    marginBottom: '60px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '200px'
    },
  },
})


export default homeStyle