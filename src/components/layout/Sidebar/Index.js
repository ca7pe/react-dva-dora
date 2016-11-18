import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import styles from './Index.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Index(props) {
    const { sideBarList, url } = props;
    function resolveUrl(url){
      return url.replace(/(^\/[^\/]+)/g,'');
    }

  	return (
	  	<Menu mode="inline" theme="dark"
          defaultSelectedKeys={[`${url}`]} defaultOpenKeys={[`${resolveUrl(url)}`]}>
          {
            sideBarList.map(function(sideBarItem){
              if (sideBarItem.sub && sideBarItem.sub.length > 0) {
                return (
                  <SubMenu key={sideBarItem.key} title={<span><Icon type="user" />{sideBarItem.name}</span>}>
                      {
                        sideBarItem.sub.map((item) =>
                          (
                            <Menu.Item key={item.key}><Link to={item.url}>{item.name}</Link></Menu.Item>
                          )
                        )
                      }
                  </SubMenu>
                );
              }else{
                return(
                  <Menu.Item key={sideBarItem.key}><Link to={sideBarItem.url}>{sideBarItem.name}</Link></Menu.Item>
                )
              }
            })
          }
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
