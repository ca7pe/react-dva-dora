import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';

import styles from './Index.less';

import Breadcrumb from 'antd/lib/breadcrumb';
import 'antd/lib/breadcrumb/style/css';

function Index(props) {
	const { breadList } = props;
    return ( 
    	<Breadcrumb>
        {
        	breadList.map((item,index) => (
				<Breadcrumb.Item key={index}>{item.url ? <Link to={item.url}>{item.name}</Link> : item.name}</Breadcrumb.Item> 
			))
		}
        </Breadcrumb>
    );
}

function mapStateToProps(state) {
    return state.frame;
}

export default connect(mapStateToProps)(Index);