import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Cell, CellHeader, CellBody, CellFooter } from '../Cells/';
import { Button } from '../Button/';

export default class Input extends React.Component {
    static TYPE = 'vcode';

    static propTypes = {
        disabled: PropTypes.bool,
        vcodeDisabled: PropTypes.bool,
        type: PropTypes.string,
        vsrc: PropTypes.string,
        vtext: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        vcodeDisabled: false,
        type: 'text',
        vsrc: '',
        vtext: ''
    };

    onVCodeClick (e) {
        if (!this.props.vcodeDisabled) {
            this.props.onVCodeClick && this.props.onVCodeClick(e);
        }
    }

    inputHTMLFooter (type, realType, vsrc, vtext) {
        let Component = null;
        if (Input.TYPE === type && vsrc) {
            Component = (<img className="weui-vcode-img" onClick={this.onVCodeClick.bind(this)} src={vsrc}/>);
        } else if (Input.TYPE === type) {
            Component = (<Button disabled={this.props.vcodeDisabled} type={type}
                                 onClick={this.onVCodeClick.bind(this)}>{vtext}</Button>);
        }
        if (!Component) {
            return;
        }
        return (
            <CellFooter>
                {Component}
            </CellFooter>
        );
    }

    render () {
        const {disabled, vcodeDisabled, vtext, vsrc, className, children, type, onVCodeClick, ...others} = this.props;
        const realType = type === 'vcode' ? 'text' : type;
        const cls = classNames({
            'weui-cell_disabled': disabled,
            [className]: className
        });

        return (
            <Cell className={cls} vcode={type === Input.TYPE} component={'label'}>
                <CellHeader>
                    <label className={'weui-label'}>{children}</label>
                </CellHeader>
                <CellBody>
                    <input className="weui-input" disabled={disabled} type={realType} {...others}/>
                </CellBody>
                {this.inputHTMLFooter(type, realType, vsrc, vtext)}
            </Cell>
        );
    }
}