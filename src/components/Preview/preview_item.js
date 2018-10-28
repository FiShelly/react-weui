import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

const PreviewItem = (props) => {
    const {className, children, label, value, ...others} = props;
    const cls = classNames({
        'weui-form-preview__item': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
            <label className='weui-form-preview__label'>{label}</label>
            <em className='weui-form-preview__value'>{value}</em>
        </div>
    );
};

PreviewItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
};

PreviewItem.defaultProps = {
    label: false,
    value: false,
};

export { PreviewItem };