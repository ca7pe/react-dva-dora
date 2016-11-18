import { list as server_game_list } from '../services/game';
import { parse } from 'qs';
import getPlat from '../utils/plat';

export default {

    namespace: 'frame',

    state: {
        collapse: false,
        sideBarList: [],
        breadList: [],
        url : '',
    },

    subscriptions: {
        setup({ dispatch, history }) {
        	dispatch({
                type: 'query',
            });

            history.listen(location => {
                dispatch({
                    type: 'breadcrumbInit',
                    payload: {
                    	url : location.pathname
                    },
                });
                dispatch({
                    type: 'sidebarInit',
                    payload: {
                        url : location.pathname
                    },
                });
            });
        },
    },

    effects: {
    	 * query({ payload }, { call, put }) {
            const { data } = yield call(server_game_list);
            if (data && data.code === 0) {
                let list = [{
                    name: '游戏列表',
                    key: '/game',
                    url: '/game',
                }];
                data.data.map((d) => (list.push({
                    name: `${d.appName}(${getPlat(d.plat)})`,
                    key: `/${d.appCode}/${d.plat}`,
                    url: '',
                    sub: [{
                        name: '热更新包列表',
                        key: `/hotupdate/${d.appCode}/${d.plat}`,
                        url: `/hotupdate/${d.appCode}/${d.plat}`,
                    }, {
                        name: '渠道配置列表',
                        key: `/channel/${d.appCode}/${d.plat}`,
                        url: `/channel/${d.appCode}/${d.plat}`
                    }, {
                        name: 'manifest模板管理',
                        key: `/manifest/${d.appCode}/${d.plat}`,
                        url: `/manifest/${d.appCode}/${d.plat}`
                    }]
                })));

                yield put({
                    type: 'sidebarInit',
                    payload: {
                        list
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
            let {list ,url} = action.payload;
            console.log(`sidebarInit:${url}`);
            if (list) {
                return {...state, sideBarList: list};
            }

            if (url) {
                return {...state, url: url };
            }
        },
        breadcrumbInit(state, action) {
        	let { sideBarList } = state;
        	let { url } = action.payload;
        	let breadList = [
	        	{
	        		name : '首页',
	        		url : '/'
	        	}
	        ];

        	function matchItem(arr,value){
        		let _arr = [];
        		for (let i = 0; i < arr.length; i++) {
        			_arr.push({
    					name : arr[i].name,
    					url : arr[i].url
    				});
        			if (arr[i].url == value) {
        				break;
        			}else{
        				if (arr[i].sub) {
        					let _subArr = matchItem(arr[i].sub,value);
        					if (_subArr.length == 0) {
        						_arr.pop();
        					}else{
        						_arr = _arr.concat(_subArr);
        						break;
        					}
        				}else{
        					_arr.pop();
        				}
        			}
        		}
        		return _arr;
        	}

            return {...state, breadList: breadList.concat(matchItem(sideBarList, url)) };
        },
    },

}
