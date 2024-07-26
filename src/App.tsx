import styles from './App.module.css'
import { CirclePlus } from 'lucide-react';
import { Header } from './components/Header'

import './global.css';
import { TaskList } from './components/TaskList';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <form className={styles.newTaskForm} action="">
            <input className={styles.newTaskName} type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.newTaskButton} type="submit">Criar <CirclePlus size={16}/></button>
          </form>
          
          <TaskList />
      </div>

      
    </div>
  )
}
