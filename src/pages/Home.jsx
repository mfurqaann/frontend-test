import Counter from '../features/Counter/Counter'
import Form from '../features/Form/Form'
import TodoList from '../features/TodoList/TodoList'

const Home = () => {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll'>
      <div className='h-screen snap-start'>
        <Counter />
      </div>
      <div className='h-screen snap-start'>
        <Form/>
      </div>
      <div className='h-screen snap-start'>
        <TodoList/>
      </div>
    </div>
  )
}

export default Home