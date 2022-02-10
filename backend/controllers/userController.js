import asyncHandler from 'express-async-handler';
import User from '../models/UserModel.js';
import genarateToken from '../utils/genarateToken.js';

const login = asyncHandler(async (req,res) => {
  const {email,password} = req.body;


  const user = await User.findOne({email});

  if(user && await user.matchPassword(password)){
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:genarateToken(user._id)
    })
  }else{
    res.status(401);
    throw new Error('the user or password is not valid!')
  }

  
})

const getProfile = asyncHandler(async (req,res) => {
  console.log(req.user)
  
  res.json(req.user);
})

const registerUser = asyncHandler(async (req,res) => {
  const {name,email,password} = req.body;
  const userExist = await User.findOne({email});
  if(userExist){
    res.status(400);
    throw new Error(`this email already exist`);
  }

  const user = await User.create({
    email,
    name,
    password
  })

  res.status(201).json({
    _id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
    token:genarateToken(user._id)
  })
  
})

export{
    login,
    getProfile,
    registerUser
}