import { Router } from "express";
import { registerUser, loginUser, logoutUser, updateProfile, getProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

//create router
const userRouter = Router();

 
//define routes
userRouter.post('/users/registerUser', registerUser);

userRouter.post('/users/loginUser', loginUser);

userRouter.get('/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.post('/users/logoutUsesr', isAuthenticated, logoutUser);

userRouter.patch('/users/me', isAuthenticated, hasPermission('update_profile'), userAvatarUpload.single('avatar'), updateProfile);

//export router
export default userRouter