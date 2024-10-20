import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: { type: String,
         default: "user", 
         enum: ['user', 'vendor', 'admin', 'superadmin'] },
  },
  {
    timestamps: true,
});

// Apply plugin
userSchema.plugin(toJSON);

export const UserModel = model("User", userSchema);
