import path from "path";
import url from "url";
import json5 from "json5";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
	entry: "./source/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(dirname, "public"),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(bmp|png|svg|jpe?g|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.json5$/i,
				type: "json",
				parser: {
					parse: json5.parse,
				},
			},
		],
	},
};
