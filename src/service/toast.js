import ReactDom from 'react-dom';
import { Toast } from '../components/Toast';

const showComponent = (props) => {
    const div = document.createElement('div');
    const body = document.querySelector('body');
    body.appendChild(div);

    const toast = new Toast(props);

    renderComponent(toast, div);

    toast.onClose = () => {
        toast.props.show = false;
        renderComponent(toast, div);
        ReactDom.unmountComponentAtNode(div);
        body.removeChild(div);
    };

    return toast;
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

const ToastService = {};

ToastService.cache = null;

ToastService.showLoading = (props) => {

    props = setCommonProps(props);

    props.type = 'loading';

    ToastService.showToast(props);

};

ToastService.hideLoading = (props) => {
    ToastService.hideToast(props);
};

ToastService.showToast = (props) => {
    props = setCommonProps(props);

    if (ToastService.cache) {
        ToastService.hideToast(props);
    }

    ToastService.cache = showComponent({
        ...props,
        show: true
    });
};

ToastService.hideToast = (props) => {
    ToastService.cache.onClose();
    ToastService.cache = null;
};

export default ToastService;