import React from 'react';



class Header extends React.Component {
    render(){
        return(
            <div className='header'>
                <div className="grid">
                    <div className="start">
                        <a href="/" className="">Home</a>
                    </div>
                    <div className="end">
                        <a href="/" className="">Login</a>
                        <a href="/" className="">Register</a>
                    </div>
                </div>
            <p>Header</p>
                
                
            </div>

        );
    }
}


export default Header;