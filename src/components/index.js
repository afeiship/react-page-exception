import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactEmptyState from '@jswork/react-empty-state';

const CLASS_NAME = 'react-page-exception';

export default class ReactPageException extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The title.
     */
    title: PropTypes.string,
    /**
     * The description.
     */
    description: PropTypes.string,
    /**
     * The exception icon.
     */
    image: PropTypes.string
  };

  static defaultProps = {
    title: '404',
    description: '抱歉，你访问的页面不存在',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg'
  };

  get elementView() {
    const { title, description, image } = this.props;
    return (
      <React.Fragment>
        <img className={`${CLASS_NAME}__image`} src={image} />
        <h4 className="is-title">{title}</h4>
        <p className={`${CLASS_NAME}__description`}>{description}</p>
      </React.Fragment>
    );
  }

  render() {
    const { className, title, description, image, ...props } = this.props;
    return (
      <ReactEmptyState
        element={this.elementView}
        data-component={CLASS_NAME}
        centered
        className={classNames(CLASS_NAME, className)}
        {...props}
        title={null}
      />
    );
  }
}

