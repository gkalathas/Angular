package com.example.employeemanagerapp.service;

import com.example.employeemanagerapp.exception.ResourceNotFoundException;
import com.example.employeemanagerapp.model.Employee;
import com.example.employeemanagerapp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class EmployeeService {


    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    //getAllEmployees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //get Employee by id
    public Employee getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee not exist with id: " + id));
        return employee;
    }

    //create Employee
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Employee retrievedEmployee = employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee not exist with id: " + id));

        retrievedEmployee.setFirstName(employee.getFirstName());
        retrievedEmployee.setLastName(employee.getLastName());
        retrievedEmployee.setEmailId(employee.getEmailId());
        return employeeRepository.save(retrievedEmployee);
    }

    public Employee deleteEmployee(long id) {
        Employee retrievedEmployee = employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee not exist with id: " + id));
        employeeRepository.deleteById(id);

        return retrievedEmployee;
    }

    public Employee getEmployeeByEmail(String emailId) {
        Employee retrievedEmployee = employeeRepository.findByEmailId(emailId).orElseThrow(() ->
                new ResourceNotFoundException("Employee not exist with id: " + emailId));

        return retrievedEmployee;
    }

}
