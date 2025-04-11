package br.com.mascanha.TaskFlow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.mascanha.TaskFlow.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
