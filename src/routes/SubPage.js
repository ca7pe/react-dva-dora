import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './SubPage.css';

function SubPage(props) {
  return (
    <div className={styles.normal}>
      Route Component: 'SubPage'
      <Link to="/">go to homePage.</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SubPage);
