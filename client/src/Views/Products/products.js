import React from 'react'
import ThreeTableContainer from '../../Components/Widgets/Tables/ThreesTable/threeTableContainer'
import BridgeContainer from '../../Components/Widgets/Bridge/PaperBridge/bridgeContainer'

const Products = (props) => {
    return(
        <div>
            <BridgeContainer root={props.styles.classes.root1} text={'Main Products'}></BridgeContainer>
           <ThreeTableContainer layout={4} data={props.data.products} styles={props.styles}></ThreeTableContainer>
        </div>
    )
}

export default Products