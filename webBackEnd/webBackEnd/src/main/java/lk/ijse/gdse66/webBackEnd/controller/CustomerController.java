package lk.ijse.gdse66.webBackEnd.controller;


import lk.ijse.gdse66.webBackEnd.entity.Customer;
import lk.ijse.gdse66.webBackEnd.repositry.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")

public class CustomerController {

    @Autowired
    CustomerRepo customerRepo;


    @PostMapping("/save")
    public Customer saveCustomer(@RequestBody Customer customer){
       return customerRepo.save(customer);
    }

}
