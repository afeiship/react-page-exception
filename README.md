# react-page-exception
> React page exception component.

## installation
```shell
npm install -S @feizheng/react-page-exception
```

## update
```shell
npm update @feizheng/react-page-exception
```

## properties
| property    | type   | default | description |
| ----------- | ------ | ------- | ----------- |
| className   | String | -       | -           |
| title       | String | -       | -           |
| description | String | -       | -           |
| image       | String | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-page-exception/dist/style.scss";

  // customize your styles:
  $react-page-exception-options: ()
  ```
2. import js
  ```js
  import ReactPageException from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: '403',
      items: [
        {
          title: '403',
          description: '抱歉，你无权访问该页面',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg'
        },
        {
          title: '404',
          description: '抱歉，你访问的页面不存在',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg'
        },
        {
          title: '500',
          description: '抱歉，服务器出错了',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg'
        }
      ]
    };

    get value() {
      const { items, value } = this.state;
      return items.find((item) => item.title === value);
    }

    onChange = (inEvent) => {
      const { value } = inEvent.target;
      this.setState({ value });
    };

    render() {
      const { items, value } = this.state;
      console.log('value:', value, this.value);
      return (
        <div className="app-container">
          <ReactPageException {...this.value} />

          <select name="sel1" onChange={this.onChange}>
            {items.map((item, index) => {
              return (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-page-exception/
