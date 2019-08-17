import React from 'react'
import CenteredTabs from '../../../../Components/Widgets/Tabs/tabs'

const ProductPost = (props) => {

    return (
        <div>
            <CenteredTabs styles={props.styles} data={props.data}></CenteredTabs>
        </div>
    )
}


export default ProductPost