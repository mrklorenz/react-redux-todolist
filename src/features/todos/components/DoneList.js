import React from 'react';
import {useSelector} from 'react-redux';
import {selectDoneItems} from "../reducers/todosSlice";
import {List, Card} from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

function DoneList(props) {

    const doneList = useSelector(selectDoneItems);

    return (
        <div>
            <br/>
            <h1>Done List</h1>
            <List grid={
                    {
                        gutter: 16,
                        column: 4
                    }
                }
                dataSource={doneList}
                renderItem={
                    item => (
                        <List.Item>
                            <Card title={<CheckCircleTwoTone twoToneColor="#52c41a" />}>{item.text}</Card>
                        </List.Item>
                    )
                }/>
        </div>
    );
}

export default DoneList;
