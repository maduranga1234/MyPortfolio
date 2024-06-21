package lk.ijse.gdse66.webBackEnd.repositry;

import lk.ijse.gdse66.webBackEnd.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer,String> {


}
