# react-page-exception
> React page exception component.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    align: PropTypes.string,
  };

  static defaultProps = {
    align:'middle',
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
    window.rc = this.refs.rc1;
  }

  _onClick = e =>{
    console.log('to home!');
  };

  render(){
    return (
      <div className="hello-react-page-exception">

      <h1>Align: middle(default)</h1>
      <ReactPageException
          title='403'
          description='抱歉，你无权访问该页面'
          img='https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg'
          actions={<button style={{ marginTop:20}} onClick={this._onClick}>返回首页</button>}
          ref='rc1' />
          <h1>Align: bottom</h1>
          <ReactPageException
      title='404'
      align='bottom'
      img='https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg'
      actions={<button style={{ marginTop:20}} onClick={this._onClick}>返回首页</button>}
      ref='rc2' />

      <h1>Align: top</h1>
      <ReactPageException
      title='500'
      align='top'
      description='抱歉，服务器出错了'
      img='https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg'
      actions={<button style={{ marginTop:20}} onClick={this._onClick}>返回首页</button>}
      ref='rc' />
    </div>
    );
  }
}

```

## customize style:
```scss
// customize your exception styles:
$react-page-exception-options:(
  base-size:8px,
  img-width:30em,
  img-gap:2em,
  title-font-size:8em,
  description-font-size:1.4em
);

@import '~node_modules/react-page-exception/style.scss';
```

## resouces:
+ https://preview.pro.ant.design/
