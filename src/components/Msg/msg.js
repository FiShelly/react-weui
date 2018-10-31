import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import Icon from '../Icon/icon';
import ButtonArea from '../Button/button_area';
import Button from '../Button/button';

export default class MediaBoxInfo extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
        buttons: PropTypes.array,
        footer: PropTypes.any
    };

    static defaultProps = {
        type: 'success',
        title: '',
        desc: '',
        buttons: [],
        footer: false
    };

    renderButtons(buttons) {
        return buttons.map((btn,idx) => {
            const {type,label,className, ...others} = btn;
            return (
                <Button key={idx} type={type} className={className} {...others}>{label}</Button>
            )
        })
    }

    render () {
        const {className, children, type, title, desc, buttons, footer, ...others} = this.props;

        const cls = classNames({
            'weui-msg': true,
            [className]: className
        });

        let myFooter = footer;
        if (footer && typeof footer === 'function') {
            myFooter = footer();
        }

        return (
            <div className={cls} {...others}>
                <div className="weui-msg__icon-area">
                    <Icon value={type} size='large'/>
                </div>
                <div className="weui-msg__text-area">
                    { title ? <h2 className="weui-msg__title">{title}</h2> : false }
                    { desc ? <p className="weui-msg__desc">{desc}</p> : false }
                    { children }
                </div>
                <div className="weui-msg__opr-area">
                    <ButtonArea>
                        {this.renderButtons(buttons)}
                    </ButtonArea>
                </div>
                <div className="weui-msg__extra-area">
                    {myFooter}
                </div>
            </div>
        );
    }
}