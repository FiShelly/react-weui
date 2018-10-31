import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Mask } from '../Mask/mask';
import {ButtonDialog} from '../Button';

export default class Toast extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        show: PropTypes.bool,
        title: PropTypes.string,
        text: PropTypes.string,
        buttons: PropTypes.array
    };

    static defaultProps = {
        type: 'ios',
        show: false,
        title: '',
        text: '',
        buttons: []
    };

    renderButtons (buttons) {
        return buttons.map((btn,idx) => {
            const {type,label,...other} = btn;
            return <ButtonDialog key={idx} primary={type} onClose={this.props.onClose} {...other}>{label}</ButtonDialog>
        })
    }

    render () {
        const {className, type, show, text, children, title, buttons, onClose, ...others} = this.props;

        const cls = classNames({
            'weui-dialog': true,
            'weui-skin_android': type === 'android',
            [className]: className
        });

        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask/>
                <div className={cls} {...others}>
                    {
                        title ?
                            <div className="weui-dialog__hd">
                                <strong className="weui-dialog__title">{title}</strong>
                            </div>
                            : false
                    }
                    <div className="weui-dialog__bd">{text || children}</div>
                    <div className="weui-dialog__ft">
                        {this.renderButtons(buttons)}
                    </div>
                </div>
            </div>
        );
    }
}