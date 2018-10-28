import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Icon } from '../Icon';
import {Grid} from './';

export default class Grids extends React.Component {
    static propTypes = {
        data: PropTypes.array
    };

    static defaultProps = {
        data: []
    };

    constructor (props) {
        super(props);
    }

    renderData () {
        return this.props.data.map((item, i) => {
            return <Grid
                key={i}
                icon={item.icon}
                label={item.label}
                {...item}
            />;
        });
    }

    render () {

        const {className, data, children, ...others} = this.props;

        const cls = classNames({
            'weui-grids': true,
            [className]: className
        });

        return (
            <div className={cls}  {...others}>
                {data.length > 0 ? this.renderData(data) : children}
            </div>
        );
    }
}