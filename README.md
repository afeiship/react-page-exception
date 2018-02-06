# react-page-exception
> React page exception component.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  };

  static defaultProps = {
    title: '404',
    description: '抱歉，你访问的页面不存在',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg'
  };
  
```

## usage:
```jsx

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
      <div className="hello-react-page-exception">
        <ReactPageException actions={<button style={{ marginTop:20}} onClick={this._onClick}>返回首页</button>} ref='rc' />
    </div>
    );
  }
}

```
