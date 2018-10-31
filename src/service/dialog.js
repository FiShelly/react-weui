import ReactDom from 'react-dom';
import { Dialog } from '../components/Dialog';

const showComponent = (props) => {
    const div = document.createElement('div');
    const body = document.querySelector('body');
    body.appendChild(div);

    props.onClose = () => {
        dialog.props.show = false;
        renderComponent(dialog, div);
        ReactDom.unmountComponentAtNode(div);
        body.removeChild(div);
    };

    const dialog = new Dialog(props);

    renderComponent(dialog, div);

    return dialog;
};

const renderComponent = (com, container) => {
    ReactDom.render(com.render(), container);
};

const setCommonProps = (props) => {
    let newProps = {};
    if (typeof props === 'string') {
        newProps.text = props;
    } else if (typeof  props === 'object' && !(props instanceof Array)) {
        newProps = props;
    } else {
        throw new Error('error props format');
    }
    return newProps;
};

const DialogService = {};

DialogService.cache = null;


DialogService.showDialog = (props) => {
    props = setCommonProps(props);

    DialogService.cache = showComponent({
        ...props,
        show: true
    });
};


export default DialogService;