import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
  const username = useLogin()
  return (
    <div>
      <p>Profile-Page</p>
      <p>{username}</p>
    </div>
  )
}
export default ProfilePage