import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../util/classnames';
import Icon from '../Icon/icon';

export default class Uploader extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        title: PropTypes.string,
        limit: PropTypes.number,
        multiple: PropTypes.bool,
        data: PropTypes.array,
        onFileChange: PropTypes.func,
        onError: PropTypes.func,
        onFileClick: PropTypes.func
    };

    static defaultProps = {
        disabled: false,
        title: '图片上传',
        limit: 1,
        data: [],
        multiple: false
    };

    constructor (props) {
        super(props);
        this.state = {
            fileList: props.data.map((val,idx) => {
                val.idx = idx;
                return val;
            }),
        };

    }

    createFileObj (file, cb) {
        const obj = {
            file: file,
            status: '',
            error: false,
            setErrorCallback: (e) => {
                const fileList = this.state.fileList;
                fileList[obj.idx].error = true;
                this.setState({fileList});
            },
            setStatusCallback: (prog) => {
                const fileList = this.state.fileList;
                fileList[obj.idx].status = `${Number.parseInt(prog)}%`;
                if (prog >= 100) {
                    fileList[obj.idx].status = '';
                }
                this.setState({fileList});
            }
        };

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            obj.url = e.target.result;
            cb && cb(obj);
        };
    }

    changeHandle ($event) {
        const files = $event.target.files;
        const {fileList} = this.state;
        const tempFileList = [];
        const cacheLen = fileList.length;
        const targetLen = cacheLen + files.length;
        if (files.length === 0) {
            return;
        }

        if (fileList.length + files.length > this.props.limit) {
            if (this.props.onError) {
                this.props.onError({
                    errorMessage: `最多上传${this.props.limit}张图片`,
                    data: {
                        limit: this.props.limit,
                        current: fileList.length + files.length
                    }
                });
            } else {
                console.error(`最多上传${this.props.limit}张图片`);
            }
            return;
        }

        for (let key in files) {
            if (!files.hasOwnProperty(key)) {
                continue;
            }
            this.createFileObj(files[key], (obj) => {
                obj.status = ' ';
                obj.idx = fileList.push(obj) - 1;
                tempFileList.push(obj);
                if (fileList.length === targetLen) {
                    this.setState({fileList}, () => {
                        this.props.onFileChange && this.props.onFileChange(tempFileList);
                    });
                }
            });
        }
    }

    renderFileHTML () {
        return this.state.fileList.map((fileObj, idx) => {
            const {url, file, error, status, setErrorCallback, setStatusCallback, ...others} = fileObj;
            const {onFileClick} = this.props;
            const cls = classNames({
                'weui-uploader__file': true,
                'weui-uploader__file_status': error || status
            });

            const fileStyle = {
                'backgroundImage': `url(${url})`
            };

            const handleFileClick = onFileClick ? onFileClick : (e) => {
                //TODO DEAFULE FILE CLICK FUNCTION.
            };

            return (
                <li className={cls}
                    style={fileStyle}
                    key={idx}
                    onClick={handleFileClick} {...others}
                >
                    {
                        error || status ?
                            <div className="weui-uploader__file-content">
                                {error ? <Icon value={'warn'}/> : status}
                            </div>
                            : false
                    }
                </li>
            );
        });
    }

    render () {
        const {className, title, limit, disabled, multiple, onError, onFileChange, onFileClick, ...others} = this.props;

        const {fileList} = this.state;

        const cls = classNames({
            'weui-uploader': true,
            [className]: className
        });

        let inputStyle = {
            display: `${fileList.length === limit ? 'none' : 'blcok'}`,
        };

        return (
            <div className={cls}>
                <div className="weui-uploader__hd">
                    <p className="weui-uploader__title">{title}</p>
                    <div className="weui-uploader__info">{fileList.length}/{limit}</div>
                </div>
                <div className="weui-uploader__bd">
                    <ul className="weui-uploader__files">
                        {this.renderFileHTML()}
                    </ul>
                    <div className="weui-uploader__input-box" style={inputStyle}>
                        <input className="weui-uploader__input"
                               type="file"
                               disabled={disabled}
                               accept="image/*"
                               onChange={this.changeHandle.bind(this)}
                               {...others}
                               multiple={multiple}>
                        </input>
                    </div>
                </div>
            </div>
        );
    }
}