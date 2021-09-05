import path from "path";
import url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./public",
	},
	entry: {
		index: "./source/index.js",
		print: "./source/print.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(dirname, "public"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Development",
		}),
	],
};
