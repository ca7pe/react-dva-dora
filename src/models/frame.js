import { gameList } from '../services/game';
export default {

    namespace: 'frame',

    state: {
        collapse: false,
        sideBarList: [
          {
            name : '游戏列表1',
            key : '1',
            url : '/game',
          },
          {
            name : '游戏列表2',
            key : '2',
            url : '/game1',
            sub : [
              {
                name : '热更新包列表',
                key : '3',
                url : '/hotupdate/'
              },
              {
                name : '渠道配置列表',
                key : '4',
                url : '/channel/'
              },
              {
                name : 'manifest模板管理',
                key : '5',
                url : '/manifest_template/'
              }
            ]
          },
        ]
    },

    subscriptions: {
        setup({ dispatch, history }) {},
    },

    effects: { 
      * query({ payload }, { call, put }) {
            const { data } = yield call(gameList);
            if (data) {
                put({
                    type: 'sidebarInit',
                    payload: {
                      list : []
                    }
                });
            }
        },
    },

    reducers: {
        collapse(state, action) {
            return {...state, collapse: !state.collapse };
        },
        sidebarInit(state, action) {
            return {...state, sideBarList: action.payload.list };
        }
    },

}
