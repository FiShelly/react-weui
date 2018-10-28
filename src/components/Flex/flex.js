import React from 'react';

/**
 * WeUI FlexItem Container
 *
 */
const Flex = (props) => (
    <div className="weui-flex" {...props}>
        { props.children }
    </div>
);

export default Flex;