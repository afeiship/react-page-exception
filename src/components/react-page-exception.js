import React, {Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component {
  /*===properties start===*/
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
  /*===properties end===*/

  render() {
    const {
      className,
      align,
      img,
      title,
      description,
      actions,
      ...props
    } = this.props;
    return (
      <section {...props} data-align={align} className={classNames("react-page-exception", className)}>
        <div className="react-page-exception-img">
          <img src={img} alt=""/>
        </div>
        <div className="react-page-exception-info">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          { actions }
        </div>
      </section>
    );
  }
}
