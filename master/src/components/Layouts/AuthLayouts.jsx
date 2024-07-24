



const AuthLayout = (props) => {

    const {tittle, children} = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
      <p className="font-medium text-slate-500 mb-8">Welcome, pls Enter your Details</p>
      {children}
    </div>
  )
}

export default AuthLayout