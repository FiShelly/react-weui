import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Icon } from '../Icon';

export default class Select extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        showDelete: PropTypes.bool,
        src: PropTypes.string,
        onDelete: PropTypes.func
    };

    static defaultProps = {
        show: false,
        showDelete: false,
        src: ''
    };

    constructor (props) {
        super(props);
    }

    handleClick (e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.onDelete && this.props.onDelete();
    }

    render () {

        const {className, show, showDelete, src, defaultIndex, onDelete, ...others} = this.props;

        const cls = classNames({
            'weui-gallery': true,
            [className]: className
        });

        if (!show) {
            return false;
        }
        return (
            <div className={cls} style={{display: show ? 'block' : 'none'}} {...others}>
                <span className="weui-gallery__img" style={{backgroundImage: `url(${src})`}}></span>
                {showDelete && <div className="weui-gallery__opr" onClick={this.handleClick.bind(this)}>
                    <a href="javascript:" className="weui-gallery__del">
                        <Icon value="delete" className="weui-icon_gallery-delete"/>
                    </a>
                </div>}
            </div>
        );
    }
}