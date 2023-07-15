package studentresult.management.springbootbackend.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "Student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Student_Id;
    @Column(name = "Firstname")
    private String Firstname;
    @Column(name = "Lastname")
    private String Lastname;
    @Column(name = "DOB")
    private String DOB;
    @Column(name = "Email")
    private String Email;
}
