import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const todoSchema = new Schema({
    title: {type: String, required: true},
    icon: {type: String, required: true},
    completed: {type: Boolean, default: false}
});

// Apply plugin
todoSchema.plugin(toJSON);

export const TodoModel = model('Todo', todoSchema);