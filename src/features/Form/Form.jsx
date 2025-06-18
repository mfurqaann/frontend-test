import { CircleArrowDown } from "lucide-react"
import { useState } from "react"

const Form = ({scrollTo, todoRef}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errorForm, setErrorForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [isFormValid, setIsFormValid] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsFormValid(false)
        if (validation()) {
            setIsFormValid(true)
        }
    }

    const validation = () => {
        const error = {}

        if (!formData.name.trim()) {
            error.name = "Name cannot be empty"
        }

       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            error.email = "Please enter a valid email address"
        }

        if (formData.password.length < 8) {
            error.password = "Password must be at least 8 characters long"
        }
        
        if (!formData.confirmPassword) {
            error.confirmPassword = "Confirm password cannot be empty"
        }

        if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            error.confirmPassword = "Confirm password must match the Password"
        }

        setErrorForm(error)

        return Object.keys(error).length === 0;
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full min-h-[600px] max-w-2xl bg-white rounded-xl shadow-lg p-6">
                <h1 className='text-3xl font-bold text-center mb-3'>Task 2</h1>
                <h3 className="text-2xl font-bold text-center mb-6">Register</h3>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="block text-sm mb-2 text-gray-900">Name</label>
                        <input type="text"
                            id="name"
                            name="name"
                            className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errorForm.name && <p className="text-red-400 font-medium">{errorForm.name}</p>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm mb-2 text-gray-900">Email</label>
                        <input type="text"
                            id="email"
                            name="email"
                            className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errorForm.email && <p className="text-red-400 font-medium">{errorForm.email}</p>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="password" className="block text-sm mb-2 text-gray-900">Password</label>
                        <input type="password"
                            id="password"
                            name="password"
                            className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errorForm.password && <p className="text-red-400 font-medium">{errorForm.password}</p>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="confirmPassword" className="block text-sm mb-2 text-gray-900">Confirm Password</label>
                        <input type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errorForm.confirmPassword && <p className="text-red-400 font-medium">{errorForm.confirmPassword}</p>}
                    </div>

                    <div>
                        <button className="bg-blue-500 font-medium rounded-lg p-3 text-white cursor-pointer hover:bg-blue-700">
                            Submit
                        </button>
                    </div>

                    <div className="text-center transition-all ease-in-out">
                        {isFormValid && <p className="mt-5 font-bold text-green-500">Form submitted successfully</p>}
                    </div>
                </form>
            </div>
             <button
                onClick={() => scrollTo(todoRef)}
                className="absolute cursor-pointer right-10 bottom-10 mt-8 px-4 py-2 bg-black text-white rounded"
                    >
                    <CircleArrowDown />
                </button>
        </div>
    )
}

export default Form