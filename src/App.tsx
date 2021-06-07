import React, { useEffect, useState } from 'react';
import Button from './Button';
import Column from './Column';
import { Issue, LinkedData } from './type';

const App = () => {
	const [result, setResult] = useState<Issue[]>();
	useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://api.github.com/repos/qedsoftware/sandbox/issues',
			);
			const result = await response.json();

			setResult(result);
		})();
	}, []);

	if (!result) return <h1>Error</h1>;

	const uniqueLabels: string[] = [];
	result.forEach((issue) => {
		issue.labels.forEach((label) => {
			if (!uniqueLabels.includes(label.name)) {
				uniqueLabels.push(label.name);
			}
		});
	});

	const columnsData: LinkedData[] = [];
	uniqueLabels.forEach((label) => {
		columnsData.push({
			label,
			issues: result.filter((issue) => {
				let returnValue = false;
				issue.labels.forEach((issuesLabel) => {
					if (issuesLabel.name === label) {
						returnValue = true;
					}
				});
				return returnValue;
			}),
		});
	});

	console.log(columnsData);

	return (
		<>
			<Button />
			{columnsData.map((label) => (
				<Column key={label.label} {...label} />
			))}
		</>
	);
};

export default App;
