import React from 'react';

import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import styles from './Index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Index(props) {
  	return (
	  	<Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
        <Menu.Item key="user">
          <Icon type="user" /><span className="nav-text">导航一</span>
        </Menu.Item>
        <Menu.Item key="setting">
          <Icon type="setting" /><span className="nav-text">导航二</span>
        </Menu.Item>
        <Menu.Item key="laptop">
          <Icon type="laptop" /><span className="nav-text">导航三</span>
        </Menu.Item>
        <Menu.Item key="notification">
          <Icon type="notification" /><span className="nav-text">导航四</span>
        </Menu.Item>
        <Menu.Item key="folder">
          <Icon type="folder" /><span className="nav-text">导航五</span>
        </Menu.Item>
      </Menu>
    );
}

export default Index;
