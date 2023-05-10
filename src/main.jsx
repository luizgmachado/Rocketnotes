import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/global"
import theme from "./styles/theme"

// import { Details } from "./pages/Details"
import { SignIn } from "./pages/SignIn"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{/* <Details/> */}
			<SignIn />
		</ThemeProvider>
	</React.StrictMode>
)
