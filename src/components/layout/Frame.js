import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; 
import styles from './Frame.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SideBar from './SideBar.js';

function Frame(props) {
    return (
    	<div>
	    	<div>
	    		<Row>
	    			<Col span={6}>
	    				logo
	    			</Col>
	    			<Col span={18}>
	    				<Header />
	    			</Col>
	    		</Row>
	    	</div>
	    	<div>
	    		<Row>
	    			<Col span={6}>
	    				<SideBar />
	    			</Col>
	    			<Col span={18}>
	    				<Main />
	    			</Col>
	    		</Row>
	    	</div>
	    	<div>
	    		<Footer />
	    	</div>
    	</div>
    	
    );
}

export default Frame;
