import React from 'react'
import {
	render
} from 'react-dom'

import MessageList from './MessageList.jsx'
const helloElement =
	<div>
	<MessageList />
	
</div>
render(
	helloElement,
	document.getElementById('root')
);