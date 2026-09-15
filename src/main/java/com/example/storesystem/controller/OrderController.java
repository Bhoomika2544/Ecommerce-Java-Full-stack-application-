package com.example.storesystem.controller;

import com.example.storesystem.entity.Order;
import com.example.storesystem.repository.OrderRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderRepository repository;

    public OrderController(OrderRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return repository.save(order);
    }
}