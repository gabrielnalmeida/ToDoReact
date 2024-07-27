import styles from './TaskList.module.css';

import { TaskCount } from './TaskCount';
import { CirclePlus, NotepadText } from 'lucide-react';
import { Task, TaskType } from './Task';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export function TaskList(){

    const [tasks, setTasks] = useState<TaskType[]>([
        { title: 'Estudar React', isCompleted: false },
        { title: 'Fazer site ToDo', isCompleted: true },
    ]);

    const [newTaskText, setNewTaskText] = useState('');

    const isNewTaskEmpty = newTaskText.length == 0;

    const completedTasksCount = tasks.filter(task => task.isCompleted).length;
    const createdTasksCount = tasks.length;

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();

        setTasks([...tasks, { title: newTaskText, isCompleted: false }]);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function handleDeleteTask(taskToDelete: TaskType) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        })
        setTasks(tasksWithoutDeletedOne);
    }

    function handleToggleTaskCompletion(taskToToggle: TaskType) {
        const updatedTasks = tasks.map(task =>
            task === taskToToggle ? { ...task, isCompleted: !task.isCompleted } : task
        );
        setTasks(updatedTasks);
    }

    return(
        <>
            <form onSubmit={handleCreateNewTask} className={styles.newTaskForm} action="">
                <input 
                    className={styles.newTaskName} 
                    placeholder="Adicione uma nova tarefa" 
                    
                    value={newTaskText}
                    onChange={handleNewTaskChange} 
                    onInvalid={handleNewTaskInvalid}
                    type="text" 
                    required 
                    
                />
                <button className={styles.newTaskButton} type="submit" disabled={isNewTaskEmpty}>
                    Criar <CirclePlus size={16}/>
                </button>
            </form>

            <article className={styles.tasklist}>
                <header className={styles.tasklistHeader}>
                    <TaskCount paragraph="Tarefas Criadas" count={createdTasksCount} isCompleted={false} />
                    <TaskCount paragraph="Concluidas" count={completedTasksCount} />
                </header>
                
                {tasks.length > 0 ? (
                    tasks.map(task => {
                        return(
                            <Task 
                                key={task.title}
                                task={task}
                                onDeleteTask={() => handleDeleteTask(task)}
                                onToggleTaskCompletion={() => handleToggleTaskCompletion(task)}
                            />
                        );           
                    })
                ) : (
                    <div className={styles.content}>
                        <div className={styles.emptyList}>
                            <NotepadText size={56} color="#3d3d3d" className={styles.icon} />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                )}
            </article>
        </>

    )
}