import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

export default class Cell extends React.Component {
    static propTypes = {
        access: PropTypes.bool,
        link: PropTypes.bool
    };

    static defaultProps = {
        access: false,
        link: false,
    };

    render () {
        const { className, children, access, href, link, component, htmlFor, ...others } = this.props;
        const DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
        const CellComponent = component ? component : DefaultComponent;

        console.log(access);
        const cls = classNames({
            'weui-cell': true,
            'weui-cell_access': access,
            'weui-cell_link': link,
            [className]: className
        });

        return (
            <CellComponent {...others} className={cls}>
                {children}
            </CellComponent>
        );
    }
}