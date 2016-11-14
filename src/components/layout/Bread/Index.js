import React from 'react';
import styles from './Index.css';

import Breadcrumb from 'antd/lib/breadcrumb';
import 'antd/lib/breadcrumb/style/css';

function Index(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>应用列表</Breadcrumb.Item>
      <Breadcrumb.Item>某应用</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Index;
