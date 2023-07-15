package studentresult.management.springbootbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import studentresult.management.springbootbackend.model.Course;
import studentresult.management.springbootbackend.model.Student;
import studentresult.management.springbootbackend.repository.CourseRepository;
import studentresult.management.springbootbackend.repository.StudentRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	@Autowired
	private StudentRepository studentRepository;
	private CourseRepository courseRepository;
	@Override
	public void run(String... args) throws Exception {
		Course course = new Course();
		course.setCourse_name("English");

	}

}
