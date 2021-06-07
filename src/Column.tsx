import React from 'react';
import { LinkedData } from './type';

const Column = ({ label, issues }: LinkedData) => (
	<>
		<h1>{label}</h1>
		<ul>
			{issues.map((issue) => (
				<li key={issue.id}>{issue.title}</li>
			))}
		</ul>
	</>
);

export default Column;
