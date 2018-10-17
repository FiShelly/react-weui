import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Cell, CellHeader, CellBody, CellFooter } from '../Cells/';

export default class Radio extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    render () {
        const {disabled, className, children, ...others} = this.props;
        const cls = classNames({
            'weui-cell_disabled': disabled,
            [className]: className
        });

        return (
            <Cell className={cls} component={'label'}>
                <CellBody>{children}</CellBody>
                <CellFooter>
                    <input type="radio" disabled={disabled} className="weui-check" {...others}/>
                    <span className="weui-icon-checked"></span>
                </CellFooter>
            </Cell>
        );
    }
}