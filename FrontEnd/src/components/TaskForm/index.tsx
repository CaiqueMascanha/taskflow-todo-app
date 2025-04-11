import { useForm } from "react-hook-form";

interface TaskFormInput {
  title: string;
  description: string;
}

export const TaskForm = () => {
  const { register, handleSubmit } = useForm<TaskFormInput>();

  const onSubmit = async (data: TaskFormInput) => {
    // Desenvolver a parte do POST

    console.log("Dados recebidos: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="Titulo Tarefa"
      />
      <input
        {...register("description", { required: true })}
        type="text"
        placeholder="Descrição"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};
