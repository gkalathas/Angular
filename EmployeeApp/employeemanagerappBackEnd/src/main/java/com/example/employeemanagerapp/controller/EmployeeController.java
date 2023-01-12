package com.example.employeemanagerapp.controller;


import com.example.employeemanagerapp.model.Employee;
import com.example.employeemanagerapp.model.Supervisor;
import com.example.employeemanagerapp.service.EmployeeService;
import com.example.employeemanagerapp.service.SupervisorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1/")
public class EmployeeController {

    private EmployeeService employeeService;

    SupervisorService supervisorService;

    @Autowired
    public EmployeeController(EmployeeService employeeService, SupervisorService supervisorService) {
        this.employeeService = employeeService;
        this.supervisorService = supervisorService;
    }


    //get All Employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    //create Employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    //get Employee by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        return new ResponseEntity<>(employeeService.getEmployeeById(id), HttpStatus.OK);
    }

    //update an employee
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return new ResponseEntity<>(employeeService.updateEmployee(id, employee), HttpStatus.OK);
    }

    //delete Employee
    @DeleteMapping("employees/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id) {
        return new ResponseEntity<>(employeeService.deleteEmployee(id), HttpStatus.OK);
    }

    @GetMapping("/employees")
    public ResponseEntity<Employee> getEmployeeByEmail(@RequestBody(required = false) String emailId) {
        return new ResponseEntity<>(employeeService.getEmployeeByEmail(emailId), HttpStatus.OK);
    }

    //get all supervisors
    @GetMapping("/supervisors")
    public List<Supervisor> getAllSupervisors() {
        return supervisorService.getAllSupervisors();
    }

    @GetMapping("/supervisor/{id}")
    public ResponseEntity<Supervisor> getSupervisorById(@PathVariable long id) {
        return new ResponseEntity<>(supervisorService.getSupervisorById(id), HttpStatus.OK);
    }

    @PostMapping("/supervisors")
    public Supervisor addSupervisor(@RequestBody Supervisor supervisor) {
        return supervisorService.addSupervisor(supervisor);
    }



}
