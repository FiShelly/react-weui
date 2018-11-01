import React from 'react';
import classNames from '../../util/classnames';

const PanelFooter = (props) => {
    const {className, children, ...others} = props;

    const Component = this.props.href ? 'a' : 'div';

    const cls = classNames({
        'weui-panel__ft': true,
        [className]: className
    });

    return (
        <Component className={cls} {...others}>
            {children}
        </Component>
    );
};

export default PanelFooter;