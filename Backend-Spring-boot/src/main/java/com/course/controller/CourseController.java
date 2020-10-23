package com.course.controller;

import com.course.entity.CourseEntity;
import com.course.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CourseController {

    @Autowired
    CourseRepository courseRepository;

    @PostMapping("/Courses")
    public CourseEntity AddCourse(@RequestBody CourseEntity courseEntity){
        return courseRepository.save(courseEntity);
    }

    @GetMapping("/Courses")
    public List<CourseEntity> GetCourses(){
        return courseRepository.findAll();
    }

    @DeleteMapping("/Courses/{courseid}")
    public ResponseEntity<?> DeleteCourse(@PathVariable Long courseid){
        return courseRepository.findById(courseid).map(course->{
            courseRepository.delete(course);
            return ResponseEntity.ok().build();
        }).orElseThrow(()-> new RuntimeException());
    }

    @PutMapping("/Courses/{courseid}")
    public ResponseEntity<?> UpdateCourse(@PathVariable Long courseid){
        return courseRepository.findById(courseid).map(course->{
            courseRepository.save(course);
            return ResponseEntity.ok().build();
        }).orElseThrow(()-> new RuntimeException());
    }
}
