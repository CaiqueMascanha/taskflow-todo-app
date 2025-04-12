import { PencilIcon, Trash2Icon } from "lucide-react";
import styles from "./styles.module.css";
import { api } from "../../services/api";

interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TableProps {
  data: Task[];
  onTableDeleted: () => void;
}

export const Table = ({ data, onTableDeleted }: TableProps) => {
  const handleEditTask = (id: number) => {
    console.log("Id selecionado: ", id);
  };

  const handleDeleteTask = async (id: number) => {
    await api.delete(`task/${id}`);
    onTableDeleted();
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Status</th>
          <th>Criação</th>
          <th>Atualização</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.done ? "Feita" : "Pendente"}</td>
            <td>{task.createdAt}</td>
            <td>{task.updatedAt}</td>
            <td>
              <div className={styles.actionIcons}>
                <PencilIcon
                  onClick={() => handleEditTask(task.id)}
                  className={styles.editIcon}
                />
                <Trash2Icon
                  onClick={() => handleDeleteTask(task.id)}
                  className={styles.deleteIcon}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
