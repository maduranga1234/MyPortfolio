package lk.ijse.gdse66.webBackEnd.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Customer {

    @Id
    private String email;
    private String name;

    private String massege;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMassege() {
        return massege;
    }

    public void setMassege(String massege) {
        this.massege = massege;
    }

    public Customer(String email, String name, String massege) {
        this.email = email;
        this.name = name;
        this.massege = massege;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", massege='" + massege + '\'' +
                '}';
    }

    public Customer() {

    }
}
