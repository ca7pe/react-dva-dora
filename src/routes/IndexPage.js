import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import Frame from '../components/layout/Frame.js';

function IndexPage() {
    return (
        <Frame />
    );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
