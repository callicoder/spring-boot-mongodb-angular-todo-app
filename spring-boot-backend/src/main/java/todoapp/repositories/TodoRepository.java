package todoapp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import todoapp.models.Todo;

@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {

}
