import { useAuth } from '../hooks/useAuth'

function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div>
      <h1>Bem-vindo, {user?.name}</h1>
      <button onClick={logout}>Sair</button>
    </div>
  )
}

export default Dashboard
