package studentresult.management.springbootbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import studentresult.management.springbootbackend.model.Result;
@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
    // Add any additional methods for Result repository if needed
}
