import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Mask } from '../Mask';
import './actionsheet.scss';

export default class MediaBoxInfo extends React.Component {
    static propTypes = {
        menus: PropTypes.array,
        action: PropTypes.array,
        show: PropTypes.bool,
        type: PropTypes.string,
        onMaskClick: PropTypes.func
    };

    static defaultProps = {
        menus: [],
        action: [],
        show: false,
        type: 'ios'
    };

    renderAction (actions) {
        return actions.map((action, idx) => {
            const {label, className, ...other} = action;
            const cls = classNames({
                'weui-actionsheet__cell': true,
                [className]: className
            });
            return (
                <div key={idx} className={cls} {...other}>{label}</div>
            );
        });
    }

    renderMenus (menus) {
        return menus.map((menu, idx) => {
            const {label, className, ...other} = menu;
            const cls = classNames({
                'weui-actionsheet__cell': true,
                [className]: className
            });
            return (
                <div key={idx} className={cls} {...other}>{label}</div>
            );
        });
    }

    maskHandleClick(e) {
        this.props.onMaskClick && this.props.onMaskClick(e);
    }

    render () {
        const {className, children, menus, action, show, type, onMaskClick, ...others} = this.props;

        const cls = classNames({
            'weui-actionsheet': true,
            'weui-actionsheet_toggle': show,
            [className]: className
        });

        return (
            <div className={`weui-skin_${type === 'ios' ? type : 'android'}`}>
                <Mask style={{display: show ? 'block' : 'none'}}
                      onClick={this.maskHandleClick.bind(this)}
                />
                <div className={cls} {...others}>
                    <div className="weui-actionsheet__title">
                        {children}
                    </div>
                    <div className="weui-actionsheet__menu">
                        {this.renderMenus(menus)}
                    </div>
                    <div className="weui-actionsheet__action">
                        {this.renderAction(action)}
                    </div>
                </div>
            </div>
        );
    }
}