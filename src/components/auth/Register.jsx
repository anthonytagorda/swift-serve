import { useState } from 'react';

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleRoleSelection = (selectedRole) => {
        setFormData({ ...formData, role: selectedRole });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-[#9D5623] mb-2 text-sm font-medium">
                        Employee Name
                    </label>
                    <div className='flex item-center gap-3 bg-gray-100 border border-gray-200 rounded-lg p-5 px-4 shadow-sm'>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter employee name'
                            className='bg-transparent flex-1 text-[#9D5623] focus:outline-none'
                            required
                        />
                    </div>
                </div>
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
                        Employee Phone
                    </label>
                    <div className='flex item-center gap-3 bg-gray-100 border border-gray-200 rounded-lg p-5 px-4 shadow-sm'>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Enter employee phone number'
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
                <div>
                    <label className='block text-[#9D5623] mb-2 mt-3 text-sm font-medium'>
                        Choose you role
                    </label>
                    <div className="flex item-center gap-3 mt-4">
                        {["Waiter", "Cashier", "Manager"].map((role) => {
                            return (
                                <button
                                    key={role}
                                    type="button"
                                    onClick={() => handleRoleSelection(role)}
                                    className={`bg-gray-100 border border-gray-200 px-4 py-3 w-full rounded-lg text-[#9D5623] shadow-sm 
                                        ${formData.role === role ? "bg-gray-200 text-[#ca8655]" : ""}`}
                                >
                                    {role}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <button
                    type="submit"
                    className='w-full mt-6 py-3 text-lg bg-[#9D5623] text-gray-100 font-bold rounded-lg'>
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Register
