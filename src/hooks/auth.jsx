
import { toast } from "react-toastify"

import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})
function AuthProvider({ children }) {
	const [data, setData] = useState({})
	async function signIn({ email, password }) {
		try {
			const response = await api.post("/sessions", { email, password })
			const { token, user } = response.data

			localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
			localStorage.setItem("@rocketnotes:token", token)

			api.defaults.headers.common["Authorization"] = `Bearer ${token}`

			setData({ token, user })
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.message)
			} else {
				toast.error("Não foi possível entrar.")
			}
		}
	}

	function signOut() {
		localStorage.removeItem("@rocketnotes:user")
		localStorage.removeItem("@rocketnotes:token")

		setData({})
	}

	async function UpdateProfile({ user, avatarFile }) {
		try {
			if (avatarFile) {
				const fileUploadForm = new FormData()
				fileUploadForm.append("avatar", avatarFile)

				const response = await api.patch("/users/avatar", fileUploadForm)
				user.avatar = response.data.avatar
			}

			await api.put("/users", user)
			localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

			setData({
				token: data.token,
				user,
			})
			toast.success("Perfil atualizado com sucesso, você brilhou!")
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.message)
			} else {
				toast.error("Não foi possível atualizar o perfil.")
			}
		}
	}

	useEffect(() => {
		const user = localStorage.getItem("@rocketnotes:user")
		const token = localStorage.getItem("@rocketnotes:token")

		if (token && user) {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`

			setData({
				token,
				user: JSON.parse(user),
			})
		}
	}, [])

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				UpdateProfile,
				user: data.user,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth() {
	const context = useContext(AuthContext)
	return context
}

export { AuthProvider, useAuth }
