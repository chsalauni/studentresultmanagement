package studentresult.management.springbootbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studentresult.management.springbootbackend.exception.ResourceNotFoundException;
import studentresult.management.springbootbackend.model.Course;
import studentresult.management.springbootbackend.model.Student;
import studentresult.management.springbootbackend.repository.CourseRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/course")
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;
    @GetMapping
    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }
    //build course rest api
    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }
    @GetMapping("{course_id}")
    public ResponseEntity<Course> getCourseById(@PathVariable  int course_id){
        Course course = courseRepository.findById(course_id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not exist with id:" + course_id));
        return ResponseEntity.ok(course);
    }
    @DeleteMapping("{course_id}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable int course_id) {
        Course course = courseRepository.findById(course_id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not exist with id: " + course_id));
        courseRepository.delete(course);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
