import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import store from "./store/configStore";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CssBaseline />
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<SnackbarProvider>
					<RouterProvider router={router} />
				</SnackbarProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
