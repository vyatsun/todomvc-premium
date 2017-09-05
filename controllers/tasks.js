const Todo = require('../model/Todo');
const _ = require('lodash');

class TasksRouteController {

    async all(req, res)  {
        let all = await Todo.all();
        res.json(all);
    }

    async create(req, res)  {
        let todo = _.pick(req.body, 'title', 'completed');
        await Todo.create(todo);
        res.json(todo);
    }

    async update(req, res) {
        let id = req.params.id;
        let todo = _.pick(req.body, 'title', 'completed');
        await Todo.update(id, todo);
        res.json({});
    }
    
    async destroy(req, res) {
        let id = req.params.id;
        await Todo.destroy(id);
        res.json({});
    }    
}

module.exports = new TasksRouteController;