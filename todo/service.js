class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  create = async (req) => {
    return await this.todoRepository.create(req);
  };
  findAll = async (req) => {
    return await this.todoRepository.findAll(req);
  };
  findById = async (req) => {
    return await this.todoRepository.findById(req);
  };
  update = async (req) => {
    return await this.todoRepository.update(req);
  };
  delete = async (req) => {
    return await this.todoRepository.delete(req);
  };
}
module.exports = TodoService;
