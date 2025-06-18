import { useRef } from 'react';
import Counter from '../features/Counter/Counter'
import Form from '../features/Form/Form'
import TodoList from '../features/TodoList/TodoList'

const Home = () => {
  const counterRef = useRef(null);
  const formRef = useRef(null);
  const todoRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll'>
      <div ref={counterRef}>
        <Counter scrollTo={scrollTo} formRef={formRef} />
      </div>
      <div ref={formRef}>
        <Form scrollTo={scrollTo} todoRef={todoRef}/>
      </div>
      <div ref={todoRef}>
        <TodoList scrollTo={scrollTo} counterRef={counterRef}/>
      </div>
    </div>
  )
}

export default Home