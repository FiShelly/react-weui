import React, { Component } from 'react';
import './App.css';
import Logo from './logo.svg';
import { Button, ButtonPreview } from './components/Button';
import { Cells, Cell, CellTitle, CellBody, CellHeader, CellTips, CellFooter } from './components/Cells';
import { Radio, Checkbox, Input, Switch, Textarea, Select, Agree, Slider, Uploader } from './components/Form/';
import { Badge } from './components/Badge';
import { Actionsheet } from './components/Actionsheet';
import { ToastService, DialogService } from './service';
import { Tab, NavBarItem, TabBarItem } from './components/Tab';
import { Article } from './components/Article';
import Toast from './components/Toast/toast';

class App extends Component {

    constructor () {
        super();
        this.opts = ['test 1', 'test 2'];
        this.state = {
            isShow: false
        };
    }

    handleClick (e) {
        // console.log(e.target.value);
        // this.setState({
        //     isShow: !this.state.isShow
        // })
        DialogService.showDialog({
            title: 'test',
            type: 'android',
            text: 'test !!!!!!!!',
            buttons: [
                {
                    label: '123',
                    onClick: () => {
                        console.log('erd');
                    }
                }
            ]
        });
        // setTimeout(() => {
        //     ToastService.showToast({text: 'success...'});
        // }, 2000);
        //
        // setTimeout(() => {
        //     ToastService.hideLoading();
        // }, 100000);
    }

    onError (e) {
        console.log(e);
    }

    fileChangeHandle (e) {
        console.log(e);

        setTimeout(() => {
            e[0].setErrorCallback('something wrong');
        }, 1000);
        // let i = 0;
        // setInterval(() => {
        //     i += 10;
        //     e[0].setStatusCallback(i);
        // },500)
    }

    handleMaskClick () {
        // this.setState({
        //     isShow: false
        // })

    }

    render () {

        const menus = [
            {
                label: 'menu item 0',
                onClick: (e) => {
                    console.log(e, 0, this.opts);
                }
            },
            {
                label: 'menu item 0',
                onClick: (e) => {
                    console.log(e, 0, this.opts);
                }
            },
            {
                label: 'menu item 0',
                onClick: (e) => {
                    console.log(e, 0, this.opts);
                }
            },
            {
                label: 'menu item 1',
                onClick: (e) => {
                    console.log(e, 1, this.opts);
                }
            },
            {
                label: 'menu item 2',
                onClick: (e) => {
                    console.log(e, 2, this.opts);
                }
            }
        ];

        const action = [
            {
                label: 'action item 0',
                onClick: (e) => {
                    console.log(e, 'action 0', this.opts);
                }
            }
        ];

        return (
            <div className="App">
                <Tab type="tabbar">
                    <TabBarItem icon={Logo} label="Tab1">
                        <Article>
                            <h1>Page 1</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>1.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                    </TabBarItem>
                    <TabBarItem icon={Logo} label="Tab2">
                        <Article>
                            <h1>Page 2</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>2.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                    </TabBarItem>
                    <TabBarItem icon={Logo} label="Tab3">
                        <Article>
                            <h1>Page 3</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>3.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                    </TabBarItem>
                </Tab>
            </div>
        );
    }
}

export default App;
