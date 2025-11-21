// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/todoStore'
import TodoApp from './components/todoComponent'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
  
)
