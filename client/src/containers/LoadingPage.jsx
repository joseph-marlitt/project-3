import React from 'react';
import Auth from '../modules/Auth';
import LoadingPage from '../components/LoadingPage/LoadingPage.js';


class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {}
    };
  }


  /**
     * This method will be executed after initial rendering.
     */
    componentDidMount() {
      const xhr = new XMLHttpRequest();
      xhr.open('get', '/api/dashboard');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      // set the authorization HTTP header
      xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
      console.log(Auth.getToken())
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          this.setState({
            secretData: xhr.response.message,
            user: xhr.response.user
          });
        }
      });
      xhr.send();
    }


  render() {
    return(
      <div>
        <LoadingPage secretData={this.state.secretData} user={this.state.user} />
      </div>
    )
  }
}

export default Loading;
