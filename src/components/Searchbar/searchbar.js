import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';

export default class SearchBar extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string,
        onSubmit: PropTypes.func,
        onCancel: PropTypes.func,
        onChange: PropTypes.func,
        onClear: PropTypes.func,
        inputName: PropTypes.string,
        value: PropTypes.string,
        cancelText: PropTypes.string
    };

    static defaultProps = {
        placeholder: '搜索',
        cancelText: '取消',
        inputName: ''
    };

    constructor (props) {
        super(props);
        this.state = {
            focus: false,
            inputValue: props.value || ''
        };
        props.value && props.onChange && props.onChange(props.value);
    }

    handleLabelClick () {
        this.setState({
            focus: true
        });
        this.refs.searchInput.focus();
    }

    handleInputFocus () {
        this.setState({
            focus: true
        });
    }

    handleInputBlur () {
        if (this.state.inputValue) {
            return;
        }
        this.setState({
            focus: false
        });
    }

    handleInputChange (e) {
        const val = e.target.value;
        this.props.onChange && this.props.onChange(val, e);
        this.setState({
            inputValue: val
        });
    }

    handleCancelClick (e) {
        const {onChange, onCancel} = this.props;
        this.setState({
            focus: false,
            inputValue: ''
        });
        onCancel && onCancel();
        onChange && onChange('', e);
    }

    handleClearClick (e) {
        const {onClear, onChange} = this.props;
        e.stopPropagation();
        e.preventDefault();

        this.setState({
            inputValue: ''
        });

        this.refs.searchInput.focus();

        onClear && onClear();
        onChange && onChange('', e);
    }

    handleFormSubmit (e) {
        const {onSubmit} = this.props;
        e.stopPropagation();
        e.preventDefault();
        onSubmit && onSubmit();
    }

    render () {
        const {
            className, type, onChange, inputName,
            onCancel, onSubmit, children, onClear, value, cancelText,
            placeholder, ...others
        } = this.props;

        const {focus, inputValue} = this.state;

        const cls = classNames({
            'weui-search-bar': true,
            'weui-search-bar_focusing': focus,
            [className]: className
        });

        return (
            <div className={cls} {...others}>
                <form className="weui-search-bar__form" onSubmit={this.handleFormSubmit.bind(this)}>
                    <div className="weui-search-bar__box"
                    >
                        <i className="weui-icon-search"></i>
                        <input type="search"
                               ref='searchInput'
                               className="weui-search-bar__input"
                               name={inputName}
                               placeholder={placeholder}
                               onBlur={this.handleInputBlur.bind(this)}
                               onFocus={this.handleInputFocus.bind(this)}
                               onChange={this.handleInputChange.bind(this)}
                               value={inputValue}
                               required=""/>
                        <a href="javascript:" onClick={this.handleClearClick.bind(this)}
                           className="weui-icon-clear"></a>
                    </div>
                    <label className="weui-search-bar__label"
                           onClick={this.handleLabelClick.bind(this)}
                           style={{display: focus ? 'none' : 'block'}}
                    >
                        <i className="weui-icon-search"></i>
                        <span>{placeholder}</span>
                    </label>
                </form>
                <a href="javascript:" onClick={this.handleCancelClick.bind(this)}
                   className="weui-search-bar__cancel-btn">{cancelText}</a>
            </div>
        );
    }
}
