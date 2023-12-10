/** @type {import('next').NextConfig} */
const path = require('path');
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const nextConfig = {
	output: 'export',
	// styledComponents: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_PRODUCTION_BUILD) {
		return { ...nextConfig, basePath: '/wp-content/calculator' };
	}
	return nextConfig;
};
