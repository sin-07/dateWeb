import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  
  
  
  
  return (
    <>
     <div className="flex flex-col justify-center items-center my-32">
      <h4 className="font-bold text-3xl text-white">Login</h4>
      <form >
        <div className="flex flex-col gap-5 mt-5">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="p-2 border border-gray-700 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <label htmlFor="password" className="text-white">
            Email
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="p-2 border border-gray-700 rounded-md"
          />
        </div>
        <div className="flex gap-8 justify-between items-center mt-5">
          <button
            type="submit"
            className="p-2 bg-primary text-white rounded-md"
          >
            Login
          </button>
          <Link to="/signup" className="text-primary text-sm">
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login