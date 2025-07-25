package com.aditya.Authify.io;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProfileRequest {

    @NotBlank(message = "Name should be not empty")
    private String name;
    @Email(message = "Enter valid Email address")
    @NotNull(message = "Email should not be empty")
    private String email;
    @Size(min = 6, message = "Password must be atleast 6 characters")
    private String password;
}
