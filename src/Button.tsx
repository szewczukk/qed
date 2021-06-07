import React from 'react';

const Button = () => {
	const handleClick = () => {
		const title = Math.trunc(Math.random() * 1000);
		fetch('https://api.github.com/repos/qedsoftware/sandbox/issues', {
			method: 'POST',
			headers: {
				Authorization: 'token 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',
				Accept: 'application/vnd.github.v3+json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, labels: ['bug'] }),
		});
	};

	return <button onClick={handleClick}>Generate</button>;
};

export default Button;
