package com.engine.zjut;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.engine.zjut.mapper")
public class ZjutApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZjutApplication.class, args);
	}
}
