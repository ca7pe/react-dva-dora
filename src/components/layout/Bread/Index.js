import React from 'react';
import { Link } from 'dva/router';

import styles from './Index.less';

import Breadcrumb from 'antd/lib/breadcrumb';
import 'antd/lib/breadcrumb/style/css';

function Index(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
      <Breadcrumb.Item>某应用</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Index;
