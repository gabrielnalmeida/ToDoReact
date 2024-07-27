import { Trash2 } from "lucide-react";
import styles from './Task.module.css';

export interface TaskType {
    title: string;
    isCompleted: boolean;
}

interface TaskProps {
    task: TaskType;
    onDeleteTask: () => void;
    onToggleTaskCompletion: () => void;
}

export function Task({ task, onDeleteTask, onToggleTaskCompletion }: TaskProps) {
    return (
        <div className={styles.taskDiv}>
            <section className={styles.task}>
                <div className={styles.taskNameDiv}>
                    <input 
                        type="checkbox" 
                        checked={task.isCompleted} 
                        onChange={onToggleTaskCompletion}
                    />
                    <p className={task.isCompleted ? styles.taskNameComplete : styles.taskName}>{task.title}</p>
                </div>
                <button className={styles.deleteTask} onClick={onDeleteTask}>
                    <Trash2 size={20}/>
                </button>
            </section>
        </div>
    )
}