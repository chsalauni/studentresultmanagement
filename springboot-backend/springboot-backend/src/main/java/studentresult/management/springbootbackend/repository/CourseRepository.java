package studentresult.management.springbootbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import studentresult.management.springbootbackend.model.Course;
@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    //CRUD

}

