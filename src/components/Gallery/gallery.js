import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Icon } from '../Icon';

export default class Select extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        src: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]),
        defaultIndex: PropTypes.number,
    };

    static defaultProps = {
        show: undefined,
        src: '',
        defaultIndex: 0
    };

    constructor (props) {
        super(props);
    }

    render () {

        const {className, show, src, defaultIndex, ...others} = this.props;

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
                <div className="weui-gallery__opr">
                    <a href="javascript:" className="weui-gallery__del">
                        <Icon value="delete" className="weui-icon_gallery-delete"/>
                    </a>
                </div>
            </div>
        );
    }
}