package com.example.employeemanagerapp.service;


import com.example.employeemanagerapp.exception.ResourceNotFoundException;
import com.example.employeemanagerapp.model.Employee;
import com.example.employeemanagerapp.model.Supervisor;
import com.example.employeemanagerapp.repository.SupervisorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SupervisorService {

    SupervisorRepository supervisorRepository;

    @Autowired
    public SupervisorService(SupervisorRepository supervisorRepository) {
        this.supervisorRepository = supervisorRepository;
    }

    public List<Supervisor> getAllSupervisors() {
        return supervisorRepository.findAll();
    }

    public Supervisor getSupervisorById(Long id) {
        Supervisor retrievedSupervisor = supervisorRepository.findById(id).orElseThrow(() ->
            new ResourceNotFoundException("Supervisor not found with id: " + id));

        return retrievedSupervisor;
    }


    public Supervisor addSupervisor(Supervisor supervisor) {
        return supervisorRepository.save(supervisor);
    }


}
