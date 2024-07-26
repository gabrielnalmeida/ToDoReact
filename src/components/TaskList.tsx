import styles from './TaskList.module.css';

import { TaskCount } from './TaskCount';
import { NotepadText } from 'lucide-react';

export function TaskList(){

    const task = 0;

    return(
        <article className={styles.tasklist}>
            <header className={styles.tasklistHeader}>
                <TaskCount paragraph="Tarefas Criadas" count={3} isCompleted={false} />
                <TaskCount paragraph="Concluidas" count={2} />
            </header>
            <div className={styles.content}>
                {task > 0 ? (
                    <p>Post Disponivel</p>
                ) : (
                    <div className={styles.emptyList}>
                        <NotepadText size={56} color="#3d3d3d" className={styles.icon}/>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                )}
            </div>
        </article>
    )
}