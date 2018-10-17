import React, { Component } from 'react';
import './App.css';
import { Button, ButtonPreview } from './components/Button';
import { Cells, Cell, CellTitle, CellBody, CellHeader, CellFooter } from './components/Cells';
import {Radio,Checkbox,Input} from './components/Form/';

class App extends Component {

    handleClick () {
        console.log(this);
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
                    <Input type={'vcode'} onVCodeClick={this.handleClick.bind(this)} vtext={'send code'} vsrc={'http://policesport.cmsdev/vericode/image?t=0.6338921870773058'} placeholder={'test placeholder'}>test3</Input>
                    {/*<Radio disabled={true} name={'test1'}>sss test122</Radio>*/}
                    {/*<Radio name={'test1'}>sss test123</Radio>*/}
                </Cells>
            </div>
        );
    }
}

export default App;
