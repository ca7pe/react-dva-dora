import React from 'react';
import {connect} from 'dva';

import styles from './Index.less';

import Table from 'antd/lib/table';
import 'antd/lib/table/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';

function Index(props) {
	console.log(props);
	return (
	  	<div>
	  		<Button type="primary" style={{marginBottom:20}}>Primary</Button>
	  	  	<Table columns={props.table.columns} dataSource={props.table.data} />
	  	  	<Modal title="Title of the modal dialog"
	  	  	  visible={props.modalVisible}
	  	  	  onOk={null}
	  	  	  confirmLoading={true}
	  	  	  onCancel={null}
	  	  	>
	  	  	  <p>1</p>
	  	  	</Modal>
	  	</div>
	  );
}

export default connect(({grid}) => (grid))(Index);