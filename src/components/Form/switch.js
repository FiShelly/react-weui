import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Cell, CellHeader, CellBody, CellFooter } from '../Cells/';

export default class Switch extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        position: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        position: 'right'
    };

    checkboxHTMLLeft (disabled, args) {
        return (
            <CellHeader>
                <input type="checkbox" disabled={disabled} className="weui-switch" {...args}/>
            </CellHeader>
        );
    }

    checkboxHTMLRight (disabled, args) {
        return (
            <CellFooter>
                <input type="checkbox" disabled={disabled} className="weui-switch" {...args}/>
            </CellFooter>
        );
    }

    render () {
        const {disabled, position, className, children, ...others} = this.props;
        const cls = classNames({
            'weui-cell_disabled': disabled,
            'weui-cell_switch': true,
            [className]: className
        });

        return (
            <Cell className={cls}>
                {position === 'left' ? this.checkboxHTMLLeft(disabled, others) : ''}
                <CellBody>{children}</CellBody>
                {position === 'right' ? this.checkboxHTMLRight(disabled, others) : ''}
            </Cell>
        );
    }
}