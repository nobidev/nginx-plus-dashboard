/**
 * Copyright 2017-present, Nginx, Inc.
 * Copyright 2017-present, Ivan Poluyanov
 * Copyright 2017-present, Igor Meleshchenko
 * All rights reserved.
 *
 */

import React from 'react';
import Icon from '../icon/icon.jsx';
import styles from './style.css';

export default class Footer extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		const year = new Date().getFullYear();
		const owner = location.hostname;
		return <div className={ styles.footer }>&copy; {year} {owner}, all rights reserved. Made with <Icon className={ `${ styles['icon-heart'] }` } type="heart" /> from NobiDev.</div>;
	}
};