import { list as server_game_list } from '../services/game';
import { parse } from 'qs';

export default {

	namespace: 'frame',

	state: {
		collapse: false,
		sideBarList: []
	},

	subscriptions: {
	  setup({ dispatch, history }) {
		history.listen(location => {
		  dispatch({
			type: 'query',
			payload: location.query,
		  });
		});
	  },
	},

	effects: { 
	  * query({ payload }, { call, put }) {
			const {data} = yield call(server_game_list, parse(payload));
			console.log(data);
			if (data && data.code === 0) {
				let list = [{
					name : '游戏列表',
					key : 'game',
					url : '/game',
				}];
				data.data.map((d) => (list.push({
					name : d.appName,
					key : d.id,
					url : '/game',
					sub : [
					  {
						name : '热更新包列表',
						key : `${d.id}_hotupdate`,
						url : '/hotupdate/'
					  },
					  {
						name : '渠道配置列表',
						key : `${d.id}_channel`,
						url : '/channel/'
					  },
					  {
						name : 'manifest模板管理',
						key : `${d.id}_manifest`,
						url : '/manifest/'
					  }
					]
				})));

				console.log(list);

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
			return {...state, sideBarList: action.payload.list};
		}
	},

}
