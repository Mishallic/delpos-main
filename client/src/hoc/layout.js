import React, { Component } from 'react'
import FooterContainer from '../Components/Footer/footerContainer'
import './layout.css'
//MUI
import HeaderContainer from '../Components/Header/HeaderContainer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        direction: 'rtl',
        primary: {
            light: '#778bcd',
            main: '#465E9C',
            dark: '#0d356d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#df6843',
            main: '#d84315',
            dark: '#972e0e',
            contrastText: '#fff'
        },

    },
    typography: {
        useNextVariants: true,
        "fontFamily": "\"Futura\", \"Futura\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
    },
    overrides: {
        MuiButton: {
            textPrimary: {
                color: 'black'
            },
            textSecondary: {
                color: 'white'
            }
        }
    },
    text: {
        Primary: {
            color: 'white'
        }
    }

});

class Layout extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div style={{ height: '100%' }}>
                    <HeaderContainer></HeaderContainer>
                    {this.props.children}
                    <FooterContainer></FooterContainer>
                </div>
            </MuiThemeProvider>
        )
    }
}


export default Layout