package studentresult.management.springbootbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studentresult.management.springbootbackend.exception.ResourceNotFoundException;
import studentresult.management.springbootbackend.model.Result;
import studentresult.management.springbootbackend.repository.ResultRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/result")
public class ResultController {
    @Autowired
    private ResultRepository resultRepository;
    @GetMapping
    public List<Result> getAllResult() {
        return resultRepository.findAll();
    }
    @PostMapping
    public Result createResult(@RequestBody Result result) {
        return resultRepository.save(result);
    }
    @GetMapping("/{result_id}")
    public ResponseEntity<Result> getResultById(@PathVariable long result_id) {
        Result result = resultRepository.findById(result_id)
                .orElseThrow(() -> new ResourceNotFoundException("Result not found with id: " + result_id));
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/{result_id}")
    public ResponseEntity<HttpStatus> deleteResult(@PathVariable long result_id) {
        Result result = resultRepository.findById(result_id)
                .orElseThrow(() -> new ResourceNotFoundException("Result not found with id: " + result_id));
        resultRepository.delete(result);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
