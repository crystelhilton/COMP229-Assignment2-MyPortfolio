import Project from '../models/project.model.js'
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'

// POST /api/projects
const create = async (req, res) => {
  const project = new Project(req.body)
  try {
    await project.save()
    return res.status(200).json({ message: 'Project successfully created!', project })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/projects
const list = async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// Runs whenever a route contains :projectId and attaches the document to req
const projectByID = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id)
    if (!project) return res.status(404).json({ error: 'Project not found' })
    req.project = project
    next()
  } catch (err) {
    return res.status(400).json({ error: 'Could not retrieve project' })
  }
}

// GET /api/projects/:id
const read = (req, res) => res.json(req.project)

// PUT /api/projects/:id
const update = async (req, res) => {
  try {
    let project = req.project
    project = extend(project, req.body)
    await project.save()
    res.json(project)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/projects/:id
const remove = async (req, res) => {
  try {
    const deleted = await req.project.deleteOne()
    res.json({ message: 'Project deleted', deleted })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/projects
const removeAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({})
    res.json({ message: `${result.deletedCount} project(s) deleted` })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

export default { create, list, projectByID, read, update, remove, removeAll }
