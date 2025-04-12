package br.com.mascanha.TaskFlow.services;

import br.com.mascanha.TaskFlow.dto.request.TaskRequestDto;
import br.com.mascanha.TaskFlow.dto.response.TaskResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mascanha.TaskFlow.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public TaskResponseDto execute(TaskRequestDto taskRequestDto) {

    }

}
