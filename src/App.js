import React, { Component } from 'react';
import './App.css';
import { Button, ButtonPreview } from './components/Button';
import { Cells, Cell, CellTitle, CellBody, CellHeader, CellTips, CellFooter } from './components/Cells';
import { Radio, Checkbox, Input, Switch, Textarea, Select, Agree, Slider, Uploader } from './components/Form/';
import { Badge } from './components/Badge';

class App extends Component {

    constructor () {
        super();
        this.opts = ['test 1', 'test 2'];
    }

    handleClick (e) {
        console.log(e.target.value);
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

    render () {
        return (
            <div className="App">
                <Button component='button'>sss</Button>
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
            </div>
        );
    }
}

export default App;
