import React from 'react';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import SideBar from '../SideBar';
import Bread from '../Bread';

import styles from './Index.less';

function Index(props) {
	const collapse = true;
	function onCollapseChange(e) {
		return false;
	}
    return (
    	<div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
	        <aside className="ant-layout-sider">
	          <div className="ant-layout-logo"></div>
	          <SideBar />
	          <div className="ant-aside-action" onClick={onCollapseChange}>
	            {collapse ? <Icon type="right" /> : <Icon type="left" />}
	          </div>
	        </aside>
	        <div className="ant-layout-main">
	          <div className="ant-layout-header">
	          	<Header />
	          </div>
	          <div className="ant-layout-breadcrumb">
	            <Bread />
	          </div>
	          <div className="ant-layout-container">
	            <div className="ant-layout-content">
	              <div style={{ height: 220 }}>
	                <Main />
	              </div>
	            </div>
	          </div>
	          <div className="ant-layout-footer">
	          	<Footer />
	          </div>
	        </div>
	      </div>
    );
}

export default Index;