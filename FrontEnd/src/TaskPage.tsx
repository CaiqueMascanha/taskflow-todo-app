import { useEffect, useState } from "react";
import { api } from "./services/api";
import { TaskForm } from "./components/TaskForm";
import { Table } from "./components/TaskTable";

interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

export const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await api.get("/task");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <TaskForm onTaskCreated={fetchTasks} />
      <Table data={tasks} onTableDeleted={fetchTasks} />
    </>
  );
};
