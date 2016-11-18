import React from 'react';
import { list as server_grid_list, add as server_grid_add, mod as server_grid_mod } from '../services/grid';
import { parse } from 'qs';
import {channel} from '../configs/channel';
import {game} from '../configs/game';
import {hotupdate} from '../configs/hotupdate';
import {manifest} from '../configs/manifest';

export default {
    namespace: 'grid',
    state: {
        table: {
            columns : [{
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a href="#">{text}</a>,
            }, {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            }, {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            }, {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a href="#">Action 一 {record.name}</a>
                  <span className="ant-divider" />
                  <a href="#">Delete</a>
                  <span className="ant-divider" />
                  <a href="#" className="ant-dropdown-link">
                  </a>
                </span>
              ),
            }],

            data : [{
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
            }, 
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '3',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '4',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '5',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '6',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '7',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '8',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '9',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '10',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, 
            {
              key: '11',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            }]
        },
        itemCurrent: {},
        pageCurrent: 1,
        pageCount: 100,
        pageNum: 10,
        modalVisible: false,
        modalType: 'create',
        loadingVisible: false
    },
    reducers: {
        modalHide(state,action){

        },
        modalShow(state,action){

        },
        listSuccess(state,action){
            
        },
        addSuccess(state,action){

        },
        modSuccess(state,action){

        },
    },
    effects: {
        * list({payload},{call,put}){
            const { data } = yield call(server_grid_list,payload);
            if (data && data.code === 0) {
                
                yield put({
                    type: 'listSuccess',
                    payload: {
                        list
                    }
                });
            }
        },
        * add(){
            const { data } = yield call(server_grid_add,payload);
            if (data && data.code === 0) {
                
                yield put({
                    type: 'addSuccess',
                    payload: {
                        list
                    }
                });
            }
        },
        * mod(){
            const { data } = yield call(server_grid_mod,payload);
            if (data && data.code === 0) {
                
                yield put({
                    type: 'modSuccess',
                    payload: {
                        list
                    }
                });
            }
        },
    },
    subscriptions: {

    },
}
