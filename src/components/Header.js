import React from 'react';

class Header extends React.Component {

renderLink() {
    const nickname = this.props.nickname;
    if(nickname){
        return(
            <span className="nickname">
                <i class="far fa-user"></i>
                {this.props.nickname}
            </span>
        )
       
    }else{  
        return(
            <React.Fragment>
            <a href="/" className="">Login</a>
            <a href="/" className="">Register</a>
            </React.Fragment>
            
        )
    }
}



    render(){
        return(
            <div className='header'>
                <div className="grid">
                    <div className="start">
                        <a href="/" className="">Home</a>
                    </div>
                    <div className="end">
                        {/* <a href="/" className="">Login</a>
                            <a href="/" className="">Register</a>
                            <span className='nickname'>
                                {this.props.nickname} 
                            </span> */}
                        {this.renderLink()}
                    </div>
                </div>
            <p>Header</p>                                
            </div>
        );
    }
}
export default Header;