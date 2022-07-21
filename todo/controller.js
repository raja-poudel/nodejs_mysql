class TodoController {
  constructor(todoService) {
    this.todoService = todoService;
  }
  create = async (req, res) => {
    try {
      const result = await this.todoService.create(req);
      res.status(200).json({ msg: "Successfully created.", data: result });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };
  findAll = async (req, res) => {
    try {
      const result = await this.todoService.findAll(req);
      res.status(200).json({ data: result });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };
  findById = async (req, res) => {
    try {
      const result = await this.todoService.findById(req);
      if (result === null) {
        return res.status(404).json({ msg: "Not Found." });
      }
      res.status(200).json({ data: result });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };
  update = async (req, res) => {
    try {
      const result = await this.todoService.update(req);
      res.status(200).json({ msg: "Updated." });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };
  delete = async (req, res) => {
    try {
      const result = await this.todoService.delete(req);
      if (result === null) {
        return res.status(404).json({ msg: "Not found." });
      }
      res.status(200).json({ msg: "deleted." });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };
}

module.exports = TodoController;
