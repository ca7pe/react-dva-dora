import React from 'react';
import { Row, Col } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import SideBar from '../SideBar';

// import 'antd/dist/antd.css';
import styles from './Index.css';

function Frame(props) {
    return (
    	<div>
	    	<Row>
				<Col span={6}>
					logo
				</Col>
				<Col span={18}>
					<Header />
				</Col>
			</Row>
	    	<Row>
				<Col span={6}>
					<SideBar />
				</Col>
				<Col span={18}>
					<Main />
				</Col>
			</Row>
	    	<Footer />
    	</div>
    	
    );
}

export default Frame;
