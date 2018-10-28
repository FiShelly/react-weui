import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Cell, CellHeader, CellBody, CellFooter } from '../Cells/';

export default class Select extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        isBefore: PropTypes.bool,
        isAfter: PropTypes.bool,
        inputDisabled: PropTypes.bool,
        selectDisabled: PropTypes.bool,
        afterText: PropTypes.string,
        data: PropTypes.any
    };

    static defaultProps = {
        disabled: false,
        inputDisabled: false,
        isBefore: false,
        isAfter: false,
        selectDisabled: false,
        afterText: ''
    };

    getNewProps (others, prefix) {
        const props = {};
        Object.keys(others).forEach(key => {
            if (key.includes(prefix)) {
                props[key.replace(prefix, '')] = others[key];
            }
        });
        return props;
    }

    renderOptHTML () {
        const {data} = this.props;
        if (data instanceof Array) {
            return data.map((val, idx) => {
                return (
                    <option key={idx} value={idx}>{val}</option>
                );
            });
        } else if (typeof data === 'object') {
            return Object.keys(data).map((val) => {
                return (
                    <option key={val} value={val}>data[val]</option>
                );
            });
        }
    }

    renderSelectHTML (disabled, others) {
        const {children, data} = this.props;
        return (
            <select className={'weui-select'}
                    disabled={disabled}
                    {...others}>
                {data ? this.renderOptHTML() : children}
            </select>
        );
    }

    renderSelectBdHTML () {
        const {inputDisabled, selectDisabled, isAfter, disabled, isBefore, afterText, className, children, data, ...others} = this.props;
        if (isBefore) {
            const inputProp = this.getNewProps(others, 'input-');
            return (
                <CellBody>
                    <input className="weui-input"
                           disabled={disabled || inputDisabled}
                           {...inputProp}/>
                </CellBody>
            );
        } else {
            return (
                <CellBody>
                    {this.renderSelectHTML((disabled || selectDisabled), others)}
                </CellBody>);
        }
    }

    renderSelectHdHTML () {
        const {afterText, inputDisabled, selectDisabled, disabled, isBefore, isAfter, className, children, data, ...others} = this.props;
        if (isBefore) {
            const selectProps = this.getNewProps(others, 'select-');
            return (
                <CellHeader>
                    {this.renderSelectHTML((disabled || selectDisabled), selectProps)}
                </CellHeader>
            );
        } else if (isAfter) {
            return (
                <CellHeader>
                    <label className="weui-label"> {afterText}</label>
                </CellHeader>
            );
        }
    }

    render () {
        const {disabled, isBefore, isAfter, className} = this.props;
        const cls = classNames({
            'weui-cell_disabled': disabled,
            'weui-cell_select': true,
            'weui-cell_select-before': isBefore,
            'weui-cell_select-after': isAfter,
            [className]: className
        });

        return (
            <Cell className={cls}>
                {this.renderSelectHdHTML()}
                {this.renderSelectBdHTML()}
            </Cell>
        );
    }
}