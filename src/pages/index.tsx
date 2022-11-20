import * as React from 'react';
import { Link } from 'gatsby';

export default function Component() {
	return (
		<>
			<h2>My First Gatsby Site</h2>
			<p>This is the main page.</p>
			<p>
				Visit the <Link to="/info">info page</Link>.
			</p>
		</>
	);
}
