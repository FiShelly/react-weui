import React from 'react';
import classNames from '../../util/classnames';

const Article = (props) => {
    const {className, children, ...others} = props;
    const cls = classNames({
        'weui-article': true,
        [className]: className
    });

    return (
        <article className={cls} {...others}>{children}</article>
    );
};

export { Article };