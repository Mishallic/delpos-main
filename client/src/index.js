import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import ScrollToTop from '../src/hoc/scrollBehaviour'

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <Routes>
            </Routes>
        </ScrollToTop>
    </BrowserRouter>
    , document.getElementById('root'));

