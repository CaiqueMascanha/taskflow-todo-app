import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import styles from "./styles.module.css";

interface TaskFormInput {
  title: string;
  description: string;
}

interface TaskFormProps {
  onTaskCreated: () => void;
}

export const TaskForm = ({ onTaskCreated }: TaskFormProps) => {
  const { register, handleSubmit, reset } = useForm<TaskFormInput>();

  const onSubmit = async (data: TaskFormInput) => {
    await api.post("/task", { ...data, done: false });
    reset();
    onTaskCreated(); // ✅ chama a função de atualizar a tabela
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Título" />
      <input {...register("description")} placeholder="Descrição" />
      <button type="submit">Adicionar</button>
    </form>
  );
};
