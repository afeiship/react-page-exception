import React, { Component } from 'react';
import classNames from 'classnames';
import ReactEmptyState from '@jswork/react-empty-state';

const CLASS_NAME = 'react-page-exception';

interface ReactPageExceptionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: string;
}

export default class ReactPageException extends Component<ReactPageExceptionProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';

  static defaultProps = {
    title: '404',
    description: '抱歉，你访问的页面不存在',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
  };

  render() {
    const { className, title, description, image, ...props } = this.props;
    return (
      <ReactEmptyState icon={null} className={classNames(CLASS_NAME, className)} {...props}>
        <img className={`${CLASS_NAME}__image`} src={image} />
        <h3 className="is-title">{title}</h3>
        <p className={`${CLASS_NAME}__description`}>{description}</p>
      </ReactEmptyState>
    );
  }
}
