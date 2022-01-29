import React from 'react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout(props) {
    return (
        <Fragment>
            <Header />
            <main className="site-content">{props.children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout
