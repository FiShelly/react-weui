import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

const MediaBox = (props) => {
    const {className, children, type, ...others} = props;
    const Component = this.props.href ? 'a' : 'div';

    const cls = classNames({
        'weui-media-box': true,
        'weui-media-box_appmsg': type === 'appmsg',
        'weui-media-box_text': type === 'text',
        'weui-media-box_small-appmsg': type === 'small_appmsg',
        [className]: className
    });

    return (
        <Component className={cls} {...others}>
            {children}
        </Component>
    );
};

MediaBox.propTypes = {
    type: PropTypes.string
};

MediaBox.defaultProps = {
    type: 'text'
};

export default MediaBox;