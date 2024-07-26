
import styles from './TaskCount.module.css';

interface TaskCountProps {
    paragraph: string;
    count: number;
    isCompleted?: boolean;
}

export function TaskCount({ paragraph, count, isCompleted = true}: TaskCountProps) {
    return(
        <div className={styles.countDiv}>
            <p className={isCompleted ? styles.completedTask : styles.createdTask}>{paragraph}</p>
            <span>{count}</span>
        </div>
    )
}