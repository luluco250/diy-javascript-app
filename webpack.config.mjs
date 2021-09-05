import path from "path";
import url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./public",
	},
	entry: "./source/main.jsx",
	output: {
		path: path.resolve(dirname, "public"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
	resolve: {
		extensions: [".js", ".jsx", ".json", ".wasm"],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"],
					},
				},
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	}
};
