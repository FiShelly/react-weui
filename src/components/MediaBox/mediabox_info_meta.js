import React from 'react';
import classNames from '../../util/classnames';
import PropTypes from 'prop-types';

const MediaBoxInfoMeta = (props) => {
    const {className, children,extra, ...others} = props;
    const cls = classNames({
        'weui-media-box__info__meta': true,
        'weui-media-box__info__meta_extra': extra,
        [className]: className
    });

    return (
        <li className={cls} {...others}>
            {children}
        </li>
    );
};

MediaBoxInfoMeta.propTypes = {
    extra: PropTypes.bool
};

MediaBoxInfoMeta.defaultProps = {
    extra: false
};

export default MediaBoxInfoMeta;