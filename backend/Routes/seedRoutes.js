import express from 'express';
import Project from '../models/projectModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Project.remove({});
  const createdProjects = await Project.insertMany(data.projects);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProjects, createdUsers });
});
export default seedRouter;