package todoapp.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import todoapp.models.Todo;

@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {
	public List<Todo> findAll();
	public Todo findOne(String id);
	public Todo save(Todo todo);
	public void delete(Todo todo);
}
