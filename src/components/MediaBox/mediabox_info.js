import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { MediaBoxInfoMeta } from './';

export default class MediaBoxInfo extends React.Component {
    static propTypes = {
        data: PropTypes.array
    };

    static defaultProps = {
        data: []
    };

    renderData () {
        return this.props.data.map((item, i) => {
            return <MediaBoxInfoMeta key={i} extra={item.extra}>{item.label}</MediaBoxInfoMeta>;
        });
    }

    render () {
        const {className, children, data, ...others} = this.props;

        const cls = classNames({
            'weui-media-box__info': true,
            [className]: className
        });

        return (
            <ul {...others} className={cls}>
                {data.length > 0 ? this.renderData() : children}
            </ul>
        );
    }
}