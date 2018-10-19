import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Cell, CellHeader, CellBody, CellFooter } from '../Cells/';

export default class Agree extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        linkText: PropTypes.string,
        href: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        linkText: '',
        href: ''
    };

    render () {
        const {disabled, className, href, linkText, children, ...others} = this.props;
        const cls = classNames({
            'weui-cell_disabled': disabled,
            'weui-agree': true,
            [className]: className
        });
        return (
            <label className={cls}>
                <input type="checkbox" disabled={disabled} className="weui-agree__checkbox" {...others}/>
                <span className="weui-agree__text">
                    {children}
                    <a href={href}>{linkText}</a>
                </span>
            </label>
        );
    }
}
