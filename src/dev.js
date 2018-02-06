import './dev.scss';
import ReactPageException from './main';

/*===example start===*/

// install: npm install afeiship/react-page-exception --save
// import : import ReactPageException from 'react-page-exception'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onClick = e =>{
    console.log('to home!');
  };

  render(){
    return (
      <div className="hello-react-page-404">
        <ReactPageException actions={<button style={{ marginTop:20}} onClick={this._onClick}>返回首页</button>} ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
