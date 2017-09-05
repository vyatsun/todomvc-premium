const db = require('./db');
const ObjectId = require('mongodb').ObjectID;

class Todo {

    all() {
        return db.get().collection('todos').find().toArray();
    }
    
    create(todo) {
        return db.get().collection('todos').insertOne(todo);
    }
    
    update(id, todo) {
        return db.get().collection('todos').updateOne({_id: new ObjectId(id)}, {$set: todo});
    }
    
    destroy(id) {
        return db.get().collection('todos').remove({_id: new ObjectId(id)});
    }
}

module.exports = new Todo;