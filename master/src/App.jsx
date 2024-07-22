import InputForm from "./components/Elements/Input"

function App() {

  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
          <p className="font-medium text-slate-500 mb-8">Welcome, pls Enter your Details</p>
          <form action="">
            <InputForm 
            label='Email' 
            type='email' 
            placeholder='example@gmail.com' 
            name='email'/>
            <InputForm 
            label='Pasword' 
            type='pasword' 
            placeholder='***' 
            name='pasword'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
