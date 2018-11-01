import React from 'react';
import classNames from '../../util/classnames';

const MediaBoxHeader = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-media-box__hd': true,
        [className]: className
    });

    const childrenWithProps = React.Children.map(children, child => {
        if (child.type === 'img' && !child.props.className){
            return React.cloneElement(child, { className: 'weui-media-box__thumb' });
        } else {
            return child;
        }
    });

    return (
        <div className={cls} {...others}>
            {childrenWithProps}
        </div>
    );
};

export default MediaBoxHeader;