import React, { Component } from 'react';
import './App.css';
import { Button, ButtonPreview } from './components/Button';
import { Cells, Cell, CellTitle, CellBody, CellHeader, CellTips, CellFooter } from './components/Cells';
import { Radio, Checkbox, Input, Switch, Textarea, Select, Agree, Slider, Uploader } from './components/Form/';
import { Badge } from './components/Badge';
import { Actionsheet } from './components/Actionsheet';

class App extends Component {

    constructor () {
        super();
        this.opts = ['test 1', 'test 2'];
        this.state = {
            isShow:false
        }
    }

    handleClick (e) {
        console.log(e.target.value);
        this.setState({
            isShow: !this.state.isShow
        })
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

    handleMaskClick() {
        this.setState({
            isShow: false
        })
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
                <Button component='button' onClick={this.handleClick.bind(this)}>sss</Button>
                <CellTitle>test1</CellTitle>
                <Cells role={'checkbox'}>
                    <Cell>
                        <CellBody>
                            <p>标题文字</p>
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell access href="#">
                        <CellBody>
                            <span>cell standard</span>
                        </CellBody>
                        <CellFooter>
                        </CellFooter>
                    </Cell>
                    <Checkbox name={'test1'}>sss test121</Checkbox>
                    <Checkbox name={'test1'} position={'right'}>sss test122</Checkbox>
                    <Checkbox name={'test1'}>sss test123</Checkbox>
                    <Input placeholder={'test placeholder'}>test3</Input>
                    <Input type={'vcode'} onVCodeClick={this.handleClick.bind(this)} vtext={'send code'}
                           placeholder={'test placeholder'}>test3</Input>
                    {/*<Radio disabled={true} name={'test1'}>sss test122</Radio>*/}
                    {/*<Radio name={'test1'}>sss test123</Radio>*/}
                </Cells>
                <Cells role={'form'}>
                    <Switch>switch ~</Switch>
                </Cells>
                <Cells>
                    <Input placeholder={'test placeholder'}/>
                </Cells>
                <Cells>
                    <Textarea onInput={this.handleClick.bind(this)} rows={3} placeholder={'Textarea placeholder'}/>
                </Cells>
                <Cells>
                    <Select data={this.opts}>
                    </Select>
                    <Select isBefore={true} input-placeholder={'test~~~ try to'}>
                        <option value={4}>test 4</option>
                        <option value={5}>test 5</option>
                        <option value={6}>test 6</option>
                    </Select>
                    <Select isAfter={true} afterText={'222222'} onChange={this.handleClick.bind(this)}>
                        <option value={4}>test 4</option>
                        <option value={5}>test 5</option>
                        <option value={6}>test 6</option>
                    </Select>
                </Cells>
                <Agree href={'https://www.fishelly.top'} linkText={'<<相关条款>>'}>
                    阅读并同意
                </Agree>
                <Slider max={200} min={50} className={'csss asd eeee'} withValue={true}></Slider>
                <Cells>
                    <Cell>
                        <CellBody>
                            <Uploader limit={4} multiple={true} onError={this.onError.bind(this)}
                                      onFileChange={this.fileChangeHandle.bind(this)}/>
                        </CellBody>
                    </Cell>
                </Cells>
                <Actionsheet type="android" menus={menus} onMaskClick={this.handleMaskClick.bind(this)} action={action} show={this.state.isShow}>测试下~~~</Actionsheet>
            </div>
        );
    }
}

export default App;
