// import { TodoModel } from "../models/todo.js";

// export const addTodo = async (req, res, next) => {
//  try {
//        // Validate User Inputs
   
//        // Write todo to Database
//        await TodoModel.create(req.body);    
//        // Respond to request
//        res.status(201).json('Todo was added');
//  } catch (error) {
//     next(error);
//  }
// }

// export const getTodos = async (req, res, next) => {
//     try {
//         // Fetch todos from database
//         const todos = await TodoModel.find();
//         // Return a response
//         res.status(200).json(todos);
//     } catch (error) {
//        next(error); 
//     }
// }

// export const updateTodo = (req, res, next) => {
//     res.json('Todo updated!');
// }

// export const deleteTodo = (req, res, next) => {
//     res.json('Todo deleted!');
// }


import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res, next) => {
    try {
        //Validate user input 
        //Write todo to database
        await TodoModel.create(req.body);
        //Respond to request
        res.status(201).json('Todo was added');
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {
    try {
        //fetch todos from database
        const todos = await TodoModel.find()
        //return response
        res.status(200).json(todos);

    } catch (error) {
        next(error);
    }
}

export const updateTodo = (req, res, next) => {
    res.json('Todo updated!');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted!');
}