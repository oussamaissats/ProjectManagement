import express from 'express';
import Project from '../models/projectModel.js';

const projectRouter = express.Router();

projectRouter.get('/', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

projectRouter.get('/ref/:ref', async (req, res) => {
    const project = await Project.findOne({ ref: req.params.ref });
  if (project) {
    res.send(project);
  } else {
    res.status(404).send({ message: 'Project Not Found' });
  }
});
projectRouter.get('/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    res.send(project);
  } else {
    res.status(404).send({ message: 'Projecct Not Found' });
  }
});

export default projectRouter;