import React from 'react';
 
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default (props) => {
    return (
        <div>
            <Header />
            
                <Main />
            
            <Footer />
        </div>
    );
};