import React from 'react';
import {connect} from 'dva';

import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import styles from './Index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Index(props) {
    const { sideBarList } = props;

    const MenuList = sideBarList.map(function(sideBarItem){
      if (sideBarItem.sub && sideBarItem.sub.length > 0) {
        let SubMenuList = '';
        SubMenuList = sideBarItem.sub.map((item) =>
          (
            <Menu.Item key={item.key}>{item.name}</Menu.Item>
          )
        );
        return (
          <SubMenu key={sideBarItem.key} title={<span><Icon type="user" />{sideBarItem.name}</span>}>
              {SubMenuList}
          </SubMenu>
        );
      }else{
        return(
          <Menu.Item key={sideBarItem.key}>{sideBarItem.name}</Menu.Item>
        )
      }
    });

  	return (
	  	<Menu mode="inline" theme="dark"
          defaultSelectedKeys={['3']} defaultOpenKeys={['2']}>
          {MenuList}
      </Menu>
    );
}

function mapStateToProps(state) {
  return state.frame;
}

function mapDispatchToProps(dispatch) {
  return {
    onCollapseChange(){
      dispatch({type: 'frame/collapse'});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
