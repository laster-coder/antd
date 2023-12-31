import React from "react";

const WithLoadingComponent = (comp: JSX.Element) => {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
	);
};

export default WithLoadingComponent;
