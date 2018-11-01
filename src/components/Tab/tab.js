import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import TabbarItem from './tabbar_item';
import NavbarItem from './navbar_item';
import TabBody from './tab_body';
import TabBodyItem from './tab_body_item';
import Tabbar from './tabbar';
import Navbar from './navbar';

export default class Tab extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        onChange: PropTypes.func,
        selected: PropTypes.any
    };

    static defaultProps = {
        type: 'normal',
        selected: 0
    };

    state = {
        select: this.props.selected
    };

    handleClick (idx) {
        this.setState({select: idx});
        this.props.onChange && this.props.onChange(idx);
    }

    parseChildren (children) {
        const childrenBar = [];
        const childrenContent = [];
        React.Children.map(children, (child, idx) => {
            if (!child) {
                return;
            }
            const {type, props} = child;
            const {children, ...other} = props;
            if (type === TabbarItem || type === NavbarItem) {
                childrenBar.push(child);
                if (children) {
                    childrenContent.push(<TabBodyItem>{children}</TabBodyItem>);
                }
            } else if (type === TabBodyItem) {
                childrenContent.push(children);
            }
        });

        return {
            childrenBar, childrenContent
        };
    }

    renderTab (children, cls, type) {
        const {childrenContent, childrenBar} = this.parseChildren(children);
        const bars = childrenBar.map((bar, idx) => {
            return React.cloneElement(bar, {
                key: idx,
                active: this.state.select === idx,
                onClick: this.handleClick.bind(this, idx)
            });
        });

        const content = childrenContent.map((con, idx) => {
            return React.cloneElement(con, {
                key: idx,
                active: this.state.select === idx,
            });
        });

        if (type === 'tabbar') {
            return (
                <div className={cls}>
                    <TabBody>
                        {content}
                    </TabBody>
                    <Tabbar>
                        {bars}
                    </Tabbar>
                </div>
            );
        } else if (type === 'navbar') {
            return (
                <div className={cls}>
                    <Navbar>
                        {bars}
                    </Navbar>
                    <TabBody>
                        {content}
                    </TabBody>
                </div>
            );
        }
    }

    render () {
        const {className, type, onChange, selected, children, ...others} = this.props;

        const cls = classNames({
            'weui-tab': true,
            [className]: className
        });

        if (type === 'normal') {
            return (
                <div className={cls} {...others}>
                    {children}
                </div>
            );
        } else {
            return this.renderTab(children, cls, type);
        }

    }
}