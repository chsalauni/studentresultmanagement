package studentresult.management.springbootbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import studentresult.management.springbootbackend.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
    //CRUD

}
