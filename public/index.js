import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPageException from '../src/main';
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
