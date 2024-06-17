import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
	{
		languageOptions: { globals: globals.browser },
		rules: {
			"react/react-in-jsx-scope": "off",
		},
	},
	pluginJs.configs.recommended,
	{
		files: ["**/*.jsx"],
		languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
	},
	pluginReactConfig,
];
