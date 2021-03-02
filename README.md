# react-page-exception
> React page exception component.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-page-exception
```

## properties
| Name        | Type   | Required | Default                                                               | Description                           |
| ----------- | ------ | -------- | --------------------------------------------------------------------- | ------------------------------------- |
| className   | string | false    | -                                                                     | The extended className for component. |
| title       | string | false    | '404'                                                                 | The title.                            |
| description | string | false    | '抱歉，你访问的页面不存在'                                            | The description.                      |
| image       | string | false    | 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg' | The exception icon.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-page-exception/dist/style.css";

  // or use sass
  @import "~@jswork/react-page-exception/dist/style.scss";

  // customize your styles:
  $react-page-exception-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactPageException from '@jswork/react-page-exception';
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
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-page-exception">
          <div className="select is-fullwidth is-rounded">
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
          <ReactPageException {...this.value} />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-page-exception/


## license
Code released under [the MIT license](https://github.com/afeiship/react-page-exception/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-page-exception
[version-url]: https://npmjs.org/package/@jswork/react-page-exception

[license-image]: https://img.shields.io/npm/l/@jswork/react-page-exception
[license-url]: https://github.com/afeiship/react-page-exception/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-page-exception
[size-url]: https://github.com/afeiship/react-page-exception/blob/master/dist/react-page-exception.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-page-exception
[download-url]: https://www.npmjs.com/package/@jswork/react-page-exception
