import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRuter } from "./router/AppRuter"

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRuter/>
    </AuthProvider>
  )
}
