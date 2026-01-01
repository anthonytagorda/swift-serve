import { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#9D5623] mb-2 text-sm font-medium">
            Employee Email
          </label>
          <div className='flex item-center gap-3 bg-gray-100 border border-gray-200 rounded-lg p-5 px-4 shadow-sm'>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter employee email'
              className='bg-transparent flex-1 text-[#9D5623] focus:outline-none'
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-[#9D5623] mb-2 text-sm font-medium">
            Password
          </label>
          <div className='flex item-center gap-3 bg-gray-100 border border-gray-200 rounded-lg p-5 px-4 shadow-sm'>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter password'
              className='bg-transparent flex-1 text-[#9D5623] focus:outline-none'
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className='w-full mt-6 py-3 text-lg bg-[#9D5623] text-gray-100 font-bold rounded-lg'>
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Login
