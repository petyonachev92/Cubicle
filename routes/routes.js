// TODO: Require Controllers...

const { Router } = require("express")
const { getAllCubes, getCube } = require('../controllers/cubes')
const Cube = require('../models/Cube')


const router = Router()
    
router.get('/', async (req, res) => {
    res.render('index', {
        title: 'Cube Workshop',
        cubes: await getAllCubes()
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About | Cube Workshop'
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create | Cube Workshop'
    })
})

router.post('/create', (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body

    const cube = new Cube({name, description, imageUrl, difficulty: difficultyLevel})

    cube.save(() => {
        res.redirect('/')
    })
})

router.get('/details/:id', async (req, res) => {
    
    const cube = await getCube(req.params.id)
    
    res.render('details', {
        title: 'Details | Cube Workshop',
        ...cube
    })
})

router.get('*', (req, res) => {
    res.render('404', {
        title: 'Error | Cube Workshop'
    })
})

module.exports = router