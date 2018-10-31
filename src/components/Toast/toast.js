import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import Icon from '../Icon/icon';
import { Mask } from '../Mask/mask';

export default class Toast extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        show: PropTypes.bool,
        text: PropTypes.string,
    };

    static defaultProps = {
        type: 'success',
        show: false,
        text: ''
    };

    render () {
        const {className, type, show, text, children, ...others} = this.props;

        const cls = classNames({
            'weui-toast': true,
            [className]: className
        });

        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask transparent={true}/>
                <div className={cls} {...others}>
                    <Icon value={type} size='large' circle={false} className='weui-icon_toast'/>
                    <p className='weui-toast__content'>{text || children}</p>
                </div>
            </div>
        );
    }
}