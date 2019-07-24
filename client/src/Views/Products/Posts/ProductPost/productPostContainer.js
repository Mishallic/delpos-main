import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProductPost from './productPost'

const styles = (theme) => ({
    ContainerCardPaper:{
        padding:'1px 40px 40px 40px',
        width:'80%',
        margin:'auto',
    },
    ContainerCardPaperRoot:{
        position:'relative',
        marginBottom:'60px',
        marginTop:'20px'
    },
    TICcard: {
        display: 'flex',
        width:'80%',
        margin:'auto',
        marginTop:'0px',
        marginBottom:'0px',
        height:"400px"
      },
      TICdetails: {
        display: 'flex',
        flexDirection: 'column',
      },
      TICcontent: {
        margin:'auto'
      },
      TICcover: {
        height:'380px',
        backgroundSize:'contain'
      },
      
      TICcontrols: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
      }
})

class ProductPostContainer extends Component {

    state = {
        data:{
            monitors:{
                cardData:[

                    {
                        direction:'right',
                        elevation:0,
                        paragraph:{
                            text:
                             <ul>
                                <li>
                                    Low-power High-Perforemance Intel Celeron J1900  Quad-Core processor, 4 GB RAM, 128 SSD HDD
                                </li>
                                <li>
                                    Bezel-Free True-Flat PCAP Touch 15 Display with LED Backlight Delivering Bright and Crisp images
                                </li>
                                <li>
                                    Multiple I/O Interfaces for Peripherals
                                </li>
                            </ul>
                        },
                        header:{
                            text:'',
                            variant:'h4',
                            component:'h4'
                        },
                        img:{
                            static:'/images/apexa3-ds.png'
                        }
                    },

                    {   
                        direction:'left',
                        elevation:0,
                        paragraph:{
                            text:
                            <ul>
                            <li>
                                Flexible Installation on a Counter or a Wall
                            </li>
                            <li>
                                Engineered and Opimized for Hospitality and Retail Business
                            </li>
                        </ul>
                        },
                        header:{
                            text:'',
                            variant:'h4',
                            component:'h4'
                        },
                        img:{
                            static:'/images/apexa1-ds.png'
                        }
                    },
                ],
            },
            scanners:{
                cardData:[
                    {
                        direction:'right',
                        elevation:0,
                        paragraph:{
                            text:
                             <ul>
                                <li>
                                1 base frame can support 99 scanners
                                </li>
                                <li>
                                Wireless induction charge without cable
                                </li>
                                <li>
                                With memory stored in receiver, different transfer mode choice
                                </li>
                            </ul>
                        },
                        header:{
                            text:'',
                            variant:'h4',
                            component:'h4'
                        },
                        img:{
                            static:'/images/scanner-ds.jpg'
                        }
                    },

                    {   
                        direction:'left',
                        elevation:0,
                        paragraph:{
                            text:
                            <ul>
                            <li>
                            IP52 standard and withstand 1.5M drops
                            </li>
                            <li>
                            The communication distance on open places is from 300m updated to 600m
                            </li>
                        </ul>
                        },
                        header:{
                            text:'',
                            variant:'h4',
                            component:'h4'
                        },
                        img:{
                            static:'/images/scanner6.gif'
                        }
                    },
                ],
            },
            printer:{
                cardData:[
                    {
                        direction:'right',
                        elevation:0,
                        paragraph:{

                            text: 
                                <ul>
                                    <li>
                                        Printing Speed:220mm/sec
                                    </li>
                                    <li>
                                        Dot Density (DPI): 203.2
                                    </li>
                                    <li>
                                        Paper Width: 80mm
                                    </li>
                                </ul>
                        },
                        header:{
                            text:'',
                            variant:'h4'
                        },
                        img:{
                            static:'/images/printer3-ds.png'
                        }
                    },

                    {   
                        direction:'left',
                        elevation:0,
                        paragraph:{

                            text:
                            <ul>
                                <li>
                                    Cut Life : 1,000,000
                                </li>
                                <li>
                                    Interface : COM , Usb ethernet
                                </li>
                            </ul>
                        },
                        header:{
                            text:''
                                ,
                            variant:'h4'
                        },
                        img:{
                            static:'/images/printer1-ds.jpg'
                        }
                    },
                ],
            },
            drawer:{
                cardData:[
                    {
                        direction:'right',
                        elevation:0,
                        paragraph:{

                            text:
                            <ul>
                                <li>
                                    Dimension(WxDxH): 410 × 430 × 120(mm), 16.1 × 16.9 × 4.7(inch)
                                </li>
                                <li>
                                    Made of heavy duty guage steel 
                                </li>
                                <li>
                                    Suitable for heavy duty use and prolonged operational life
                                </li>
                            </ul>
                        },
                        header:{
                            text:'',
                            variant:'h4',

                        },
                        img:{
                            static:'/images/cashdrawer-ds.jpg'
                        }
                    },

                    {   
                        direction:'left',
                        elevation:0,
                        paragraph:{

                            text:<ul>
                            <li>
                                Adjustable and removable 4/5-note and 8-coin Cash tray with metal wire grippers
                            </li>
                            <li>
                                The ideal choice for reliability and perfect platform for any POS terminal
                            </li>
                            <li>
                                Worldwide compatible
                            </li>
                        </ul>
                        },
                        header:{
                            text:'',
                            variant:'h4',
                            compnent:'h4'
                        },
                        img:{
                            static:'/images/cashdrawer3-ds.jpg'
                        }
                    },
                ],
            },

            products:{
                monitors:{
                    title:'Delpos Monitor',
                    specs:{
                        a:'test specs allin'
                    },
                    description:{
                        a:[
                            {
                                name:'It is',
                                value:159
                            },
                            {
                                name:'really',
                                value:262
                            },
                            {
                                name:'Working',
                                value:305
                            },
                            {
                                name:'GoodJob',
                                value:365
                            }
                        ]
                    },
                    downloads:{
                        a:'file to download'
                    },
                    images:[
                  
                          {
                           
                            imgPath:'/images/apexa1-ds.png'
                          },
                          {
                           
                            imgPath:'/images/apexa2-ds.jpg'
                          },
                          {
                          
                            imgPath:'/images/apexa3-ds.png'
                          },
                          {
                          
                            imgPath:'/images/apexa4-ds.png'
                          }
                    ]
                },

                scanners:{
                    title:'Delpos scanner',
                    specs:{
                        a:'test specs allin'
                    },
                    description:{
                        a:[
                            {
                                name:'It is',
                                value:159
                            },
                            {
                                name:'really',
                                value:262
                            },
                            {
                                name:'Working',
                                value:305
                            },
                            {
                                name:'GoodJob',
                                value:365
                            }
                        ]
                    },
                    downloads:{
                        a:'file to download'
                    },
                    images:[
                  
                       {
                           
                         imgPath:'/images/scanner2.gif'
                       },
                       {
                           
                         imgPath:'/images/scanner3.gif'
                       },
                       {
                          
                         imgPath:'/images/scanner4.gif'
                       },
                       {
                          
                         imgPath:'/images/scanner5.gif'
                       }
                    ]
                },

                printer:{
                    title:'Delpos Printer',
                    specs:{
                        a:'test specs printer'
                    },
                    description:{
                        a:''
                    },
                    downloads:{
                        a:'file to download'
                    },
                    images:[
                  
                        {
                         
                          imgPath:'/images/printer1-ds.jpg'
                        },
                        {
                         
                          imgPath:'/images/printer2-ds.jpg'
                        },
                        {
                        
                          imgPath:'/images/printer3-ds.png'
                        },
                        {
                        
                            imgPath:'/images/printer4-ds.png'
                          }
                  ]
                },
                drawer:{
                    title:'Cash Drawer',
                    specs:{
                        a:'test specs drawer'
                    },
                    description:{
                        a:''
                    },
                    downloads:{
                        a:'file to download'
                    },
                    images:[
                  
                        {
                         
                          imgPath:'/images/cashdrawer-ds.jpg'
                        },
                        {
                         
                          imgPath:'/images/cashdrawer2-ds.jpg'
                        },
                        {
                        
                          imgPath:'/images/cashdrawer3-ds.jpg'
                        },
                        {
                        
                          imgPath:'/images/drawer1-ds.jpg'
                        }
                  ]
                },
               
            }
        }
    }

    render(){
        return(
            <div>
                <ProductPost styles={this.props} data={this.state.data}></ProductPost>
            </div>
        )
    }
}


export default withStyles(styles)(ProductPostContainer)