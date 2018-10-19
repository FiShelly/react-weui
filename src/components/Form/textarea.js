import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Cell, CellHeader, CellBody, CellFooter } from '../Cells/';

export default class Input extends React.Component {

    static propTypes = {
        disabled: PropTypes.bool,
        limit: PropTypes.number,
        isLimit:  PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        limit: 200,
        isLimit: true
    };

    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleInput(e) {
        let curVal = e.target.value;
        if (curVal.length > this.props.limit) {
            e.target.value = curVal = curVal.slice(0, this.props.limit);
        }
        this.props.onInput && this.props.onInput(e);
        this.setState({
            count: curVal.length
        })
    }

    limitHTML(isLimit,limit) {
        if (isLimit) {
            return <div className="weui-textarea-counter"><span>{this.state.count}</span>/{limit}</div>;
        }
    }

    render () {
        const {disabled, limit,isLimit,onInput, className, children, ...others} = this.props;
        const cls = classNames({
            'weui-cell_disabled': disabled,
            [className]: className
        });

        return (
            <Cell className={cls}>
                <CellBody>
                    <textarea onInput={this.handleInput.bind(this)} disabled={disabled} className={'weui-textarea'} {...others}></textarea>
                    {this.limitHTML(isLimit,limit)}
                </CellBody>
            </Cell>
        );
    }
}