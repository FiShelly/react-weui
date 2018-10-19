import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import ReactDOM from 'react-dom';
import { Cell, CellHeader, CellBody, CellFooter } from '../Cells/';

export default class Slider extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        withValue: PropTypes.bool,
        value: PropTypes.number,
        max: PropTypes.number,
        min: PropTypes.number,
        step: PropTypes.number,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        disabled: false,
        withValue: false,
        value: 0,
        max: 100,
        min: 0,
        step: 1
    };

    constructor (props) {
        super(props);
        const {value, min, max} = this.props;
        const stateVal = value < min ? min : value;
        this.state = {
            value: stateVal,
            innerWidth: 0,
            touching: false,
            innerProgress: 0,
            innerOffsetLeft: 0,
            percent: stateVal ? parseInt(stateVal / max * 100) : 0
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }

    componentDidMount () {
        let stepWidth = 0, innerWidth = 0, innerOffsetLeft = 0;
        const innerDOM = ReactDOM.findDOMNode(this.refs.inner);
        const {step} = this.props;
        const {value, percent} = this.state;
        innerWidth = innerDOM.clientWidth;
        innerOffsetLeft = innerDOM.offsetLeft;
        if (step) {
            stepWidth = innerWidth * step / 100;
        }
        this.setState({stepWidth, innerWidth, innerOffsetLeft}, () => {
            if (value) {
                this.setHandler(innerWidth * percent / 100);
            }
        });
    }

    handleTouchStart (e) {
        if (this.state.touching || this.props.disabled) return;
        const {innerWidth, percent} = this.state;
        this.setState({
            touching: true,
            touchId: e.targetTouches[0].identifier,
            innerProgress: innerWidth * parseInt(percent) / 100,
            moveStartX: e.changedTouches[0].clientX
        });
    }

    handleTouchMove (e) {
        this.setHandler(e.changedTouches[0].clientX - this.state.moveStartX);
    }

    handleTouchEnd () {
        this.setState({
            touching: false
        });
    }

    getHTML () {
        const {className, max, min, step, withValue, value, disabled, onChange, ...others} = this.props;
        return this.props.withValue ? this.getWithValueHTML(className, others) : this.getNoTextHTML(className, others);
    }

    setHandler (distance) {
        console.log(distance);
        let dist, percent;
        const {min, max, step, onChange} = this.props;
        const {stepWidth, innerProgress, innerWidth} = this.state;
        if (step) {
            distance = Math.round(distance / stepWidth) * stepWidth;
        }
        dist = innerProgress + distance;

        dist = dist < 0 ? 0 : dist > innerWidth ? innerWidth : dist;
        percent = 100 * dist / innerWidth;

        let tempPercent = percent / 100;

        if (tempPercent * max < min) {
            percent = min / max * 100;
            tempPercent = percent / 100;
        }

        this.setState({
            percent,
            value: parseInt(tempPercent * max)
        });

        onChange && onChange(parseInt(tempPercent * max));
    }

    handleClick (e) {
        e.preventDefault();
        const {innerOffsetLeft, innerProgress} = this.state;
        this.setHandler(e.pageX - innerOffsetLeft - innerProgress);
    }

    getNoTextHTML (className, others) {
        others = others || {};
        const {percent} = this.state;
        let trackStyles = {
            width: `${percent}%`,
            transition: 'all .1s ease'
        };

        let handlerStyles = {
            left: `${percent}%`,
            transition: 'all .1s ease'
        };

        const cls = classNames({
            'weui-slider': true,
        }, className);

        return (
            <div className={cls} {...others} onClick={this.handleClick.bind(this)}>
                <div className="weui-slider__inner" ref='inner'>
                    <div style={trackStyles} className="weui-slider__track"></div>
                    <div style={handlerStyles}
                         onTouchStart={this.handleTouchStart}
                         onTouchMove={this.handleTouchMove}
                         onTouchEnd={this.handleTouchEnd}
                         className="weui-slider__handler"></div>
                </div>
            </div>
        );
    }

    getWithValueHTML (className, others) {
        const cls = classNames({
            'weui-slider-box': true,
            [className]: className
        });
        return (
            <div className={cls} {...others}>
                {this.getNoTextHTML()}
                <div className="weui-slider-box__value">{this.state.value}</div>
            </div>
        );
    }

    render () {
        return (
            this.getHTML()
        );
    }
}