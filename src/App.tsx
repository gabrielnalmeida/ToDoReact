import styles from './App.module.css'
import { Header } from './components/Header'

import './global.css';
import { TaskList } from './components/TaskList';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>          
          <TaskList />
      </div>
    </div>
  )
}
