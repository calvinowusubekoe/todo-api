import { Router } from "express";
import { registerUser, loginUser, logoutUser, updateProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";

//create router
const userRouter = Router();


//define routes
userRouter.post('/users/registerUser', registerUser);

userRouter.post('/users/loginUser', loginUser);

userRouter.post('/users/logoutUsesr', logoutUser);

userRouter.post('/users/me', userAvatarUpload.single('avatar'), updateProfile);


//export router
export default userRouter