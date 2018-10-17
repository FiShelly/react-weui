import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Cell, CellHeader, CellBody, CellFooter } from '../Cells/';

export default class Checkbox extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        position: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        position: 'left'
    };

    checkboxHTMLLeft (disabled, args) {
        return (
            <CellHeader>
                <input type="checkbox" disabled={disabled} className="weui-check" {...args}/>
                <span className="weui-icon-checked"></span>
            </CellHeader>
        );
    }

    checkboxHTMLRight (disabled, args) {
        return (<CellFooter>
            <input type="checkbox" disabled={disabled} className="weui-check" {...args}/>
            <span className="weui-icon-checked"></span>
        </CellFooter>);
    }

    render () {
        const {disabled, position, className, children, ...others} = this.props;
        const cls = classNames({
            'weui-cell_disabled': disabled,
            [className]: className
        });

        return (
            <Cell className={cls} component={'label'}>
                {position === 'left' ? this.checkboxHTMLLeft(disabled, others) : ''}
                <CellBody>{children}</CellBody>
                {position === 'right' ? this.checkboxHTMLRight(disabled, others) : ''}
            </Cell>
        );
    }
}