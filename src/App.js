import React, { Component } from 'react';
import './App.css';
import { Button, ButtonPreview } from './components/Button';
import { Cells, Cell, CellTitle, CellBody, CellHeader, CellFooter } from './components/Cells';

class App extends Component {
    render () {
        return (
            <div className="App">
                {/*<Button component='button'>sss</Button>*/}
                <CellTitle>test1</CellTitle>
                <Cells>
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
                </Cells>
            </div>
        );
    }
}

export default App;
