import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Layout from './hoc/layout'
import Home from './Views/Home/Home'
import ProductsContainer from './Views/Products/prodcutsContainer'
import ContactUsContainer from './Views/ContactUs/contactUsContainer'
import ProductPostContainer from './Views/Products/Posts/ProductPost/productPostContainer'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={ProductsContainer} />
                {/* <Route exact path='/aboutus' component={AboutUsContainer}/> */}
                <Route exact path='/contactus' component={ContactUsContainer} />
                {/* <Route exact path='/solutions/:id' component={SolutionsContainer}/> */}
                <Route exact path='/products/:id' component={ProductPostContainer} />
            </Switch>
        </Layout>
    )
}


export default Routes