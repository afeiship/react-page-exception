import './style.scss';

import React, {Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component {
  /*===properties start===*/
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
  /*===properties end===*/

  render() {
    const {
      className,
      img,
      title,
      description,
      actions,
      ...props
    } = this.props;
    return (
      <section className={classNames("react-page-exception", className)}>
        <img width={300} className="react-page-exception-img" src={img} alt=""/>
        <div className="react-page-exception-info">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <div className="actions">{actions}</div>
        </div>
      </section>
    );
  }
}
