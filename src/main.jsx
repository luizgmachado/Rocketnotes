import React from "react"
import { ToastContainer } from "react-toastify"
 import "react-toastify/dist/ReactToastify.css"
 
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/global"
import theme from "./styles/theme"

import { AuthProvider } from "./hooks/auth"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<GlobalStyle />
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
)
