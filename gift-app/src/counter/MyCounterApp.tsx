import { useCounter } from './hooks/useCounter';

export const MyCounterApp = () => {
    const { counter, handleIncrement, handleDecrement, reset } = useCounter(5);



    return (
        <div className="bg-gray-600 text-white p-4 flex flex-col items-center h-screen justify-center gap-10">
            <h1 className='text-3xl font-bold'>
                Counter app
            </h1>
            <hr />
            <div className='flex items-center gap-4 text-2xl'>
                <button className='btn btn-primary' onClick={handleDecrement}>-1</button>
                <span>{counter}</span>
                <button className='btn btn-primary' onClick={handleIncrement}>+1</button>
            </div>
            <button className='btn btn-secondary' onClick={reset}>reset</button>
        </div>
    )
}
