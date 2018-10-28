import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import { Icon } from '../Icon';
import { GridIcon, GridLabel } from './';

export default class Grid extends React.Component {
    static propTypes = {
        icon: PropTypes.string,
        label: PropTypes.string,
        component: PropTypes.string
    };

    static defaultProps = {
        icon: false,
        label: '',
        component: 'a'
    };

    render () {

        const {className, children, icon, label, component, ...others} = this.props;

        const cls = classNames({
            'weui-grid': true,
            [className]: className
        });

        return (
            <component className={cls}  {...others}>
                {icon ? <GridIcon>{icon}</GridIcon> : false}
                {children}
                {label ? <GridLabel>{label}</GridLabel> : false}
            </component>
        );
    }
}