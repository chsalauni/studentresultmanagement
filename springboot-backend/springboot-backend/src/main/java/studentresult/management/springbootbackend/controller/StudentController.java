package studentresult.management.springbootbackend.controller;
import studentresult.management.springbootbackend.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import studentresult.management.springbootbackend.model.Student;
import studentresult.management.springbootbackend.repository.StudentRepository;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/student")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    //build student rest api
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }
    @GetMapping("{student_id}")
    public ResponseEntity<Student> getStudentById(@PathVariable  long student_id){
        Student student = studentRepository.findById(student_id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id:" + student_id));
        return ResponseEntity.ok(student);
    }
    // build delete student REST API
    @DeleteMapping("{student_id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable long student_id) {

        Student student = studentRepository.findById(student_id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + student_id));
        studentRepository.delete(student);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}