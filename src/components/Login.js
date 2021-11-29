import React from 'react';



class Login extends React.Component {
    render(){
        return(
            <form className='login-wrapper'>
            <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith"/>
            </div>
          </div>
          
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>
          </div>
          <div class="field">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
</div>
          </form>
        );
    
    }
}

export default Login;