import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

export default class Button extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        type: PropTypes.string,
        size: PropTypes.string,
        loading: PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        type: 'primary',
        size: 'normal',
        loading: false
    };

    render () {
        const {component, type, disabled, loading, size, plain, className, children, ...others} = this.props;
        console.log(component);
        const Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
        // const cls = type === 'vcode' ? classNames('weui-vcode-btn', {[className]: className}) : classNames({
        //     'weui-btn': true,
        //     'weui-btn_mini': size === 'small',
        //     'weui-btn_primary': type === 'primary' && !plain,
        //     'weui-btn_default': type === 'default' && !plain,
        //     'weui-btn_warn': type === 'warn',
        //     'weui-btn_plain-primary': type === 'primary' && plain,
        //     'weui-btn_plain-default': type === 'default' && plain,
        //     'weui-btn_disabled': this.props.disabled && !plain,
        //     'weui-btn_plain-disabled': this.props.disabled && plain,
        //     [className]: className
        // });
        const cls = classNames({
            'weui-btn': true,
            'weui-btn_mini': size === 'small',
            'weui-btn_primary': type === 'primary' && !plain,
            'weui-btn_default': type === 'default' && !plain,
            'weui-btn_warn': type === 'warn',
            'weui-btn_plain-primary': type === 'primary' && plain,
            'weui-btn_plain-default': type === 'default' && plain,
            'weui-btn_disabled': disabled && !plain,
            'weui-btn_plain-disabled': disabled && plain,
            'weui-btn_loading': loading,
            [className]: className
        });

        return (
            <Component {...others} className={cls}>
                <i className="weui-loading" style={{display: loading ? 'inline-block' : 'none'}}></i>
                {children}
            </Component>
        );
    }
}