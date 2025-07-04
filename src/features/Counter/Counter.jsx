import { CircleArrowDown } from 'lucide-react'
import { useState } from 'react'

const Counter = ({scrollTo, formRef}) => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((prevValue) => prevValue + 1)
    }
    const handleDecrement = () => {
        setCount((prevValue) => (prevValue > 0 ? prevValue - 1 : 0))
    }

    return (
        <div className='relative bg-gray-100'>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <h1 className='text-3xl font-bold mb-3'>Task 1</h1>
                <h2 className="text-2xl font-semibold mb-4">Counter</h2>
                <div className="md:text-8xl text-5xl font-bold mb-6">{count}</div>
                <div className="flex gap-4">
                    <button
                        onClick={handleDecrement}
                        disabled={count === 0}
                        className={`px-4 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition
                            ${count === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                            }`}
                    >
                        -
                    </button>
                    <button
                        onClick={handleIncrement}
                        className="px-4 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition cursor-pointer"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => scrollTo(formRef)}
                    className="absolute cursor-pointer right-10 bottom-10 mt-8 px-4 py-2 bg-black text-white rounded"
                    >
                    <CircleArrowDown />
                </button>
            </div>
        </div>
    )
}

export default Counter