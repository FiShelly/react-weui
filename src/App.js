import React, { Component } from 'react';
import './App.css';
import { Button, ButtonPreview } from './components/Button';
import { Cells, Cell, CellTitle, CellBody, CellHeader, CellTips, CellFooter } from './components/Cells';
import { Radio, Checkbox, Input, Switch, Textarea,Select,Agree,Slider } from './components/Form/';

class App extends Component {

    handleClick (e) {
        console.log(e.target.value);
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
                        <CellFooter>说明文字</CellFooter>
                    </Cell>
                    <Cell access href="#">
                        <CellBody>
                            <p>cell standard</p>
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
                    <Select  >
                        <option  value={1}>test 1</option>
                        <option value={2}>test 2</option>
                        <option value={3}>test 3</option>
                    </Select>
                    <Select isBefore={true} input-placeholder={'test~~~ try to'} >
                        <option  value={4}>test 4</option>
                        <option value={5}>test 5</option>
                        <option value={6}>test 6</option>
                    </Select>
                    <Select isAfter={true} afterText={'222222'} onChange={this.handleClick.bind(this)}>
                        <option  value={4}>test 4</option>
                        <option value={5}>test 5</option>
                        <option value={6}>test 6</option>
                    </Select>
                </Cells>
                <Agree href={'https://www.fishelly.top'} linkText={'<<相关条款>>'}>
                    阅读并同意
                </Agree>
                <Slider max={200} min={50} className={'csss asd eeee'} withValue={true}></Slider>
            </div>
        );
    }
}

export default App;
