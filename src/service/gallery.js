import ReactDom from 'react-dom';
import { Gallery } from '../components/Gallery';

const showComponent = (props) => {
    const div = document.createElement('div');
    const body = document.querySelector('body');
    const deleteCallback = props.onDelete;
    delete props.onDelete;

    body.appendChild(div);

    props.onClick = () => {
        gallery.props.show = false;
        renderComponent(gallery, div);
        ReactDom.unmountComponentAtNode(div);
        body.removeChild(div);
    };

    if (props.showDelete) {
        props.onDelete = () => {
            deleteCallback && deleteCallback();
            props.onClick();
        };
    }

    const gallery = new Gallery(props);

    renderComponent(gallery, div);

    return gallery;
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

const GalleryService = {};

GalleryService.cache = null;

GalleryService.showGallery = (props) => {
    props = setCommonProps(props);

    GalleryService.cache = showComponent({
        ...props,
        show: true
    });
};

export default GalleryService;