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
	entry: "./source/main.tsx",
	output: {
		path: path.resolve(dirname, "public"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".wasm"],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"],
					},
				},
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-react"],
						},
					},
					"ts-loader",
				],
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
