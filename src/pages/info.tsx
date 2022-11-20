import * as React from 'react';
import { Link } from "gatsby"

export default function Component() {
	return (
		<>
			<h2>Info Page</h2>
			<p>This is the info page.</p>
			<p>Go back to the <Link to="/">home page</Link>.</p>
		</>
	);
}
