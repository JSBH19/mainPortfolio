package com.jsbh.portfolio;

import com.jsbh.portfolio.domain.TestTable;
import com.jsbh.portfolio.repository.TestRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PortfolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioApplication.class, args);
	}

	@Bean
    public CommandLineRunner initData(TestRepository repository) {
        return (args) -> {
			repository.save(new TestTable("aaa"));
			repository.save(new TestTable("bbb"));
			repository.save(new TestTable("ccc"));
        };
    }
}
