const { v4 } = require('uuid')
const fs = require('fs')
const path = require('path')
const newCube = require('../controllers/create-cube')

const databaseFile = path.join(__dirname, '..', 'config/database.json')

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = v4()
        this.name = name || 'No name'
        this.description = description
        this.imageUrl = imageUrl || 'placeholder'
        this.difficulty = difficulty || 0
    }

    save() {
        const newCube = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        }

        fs.readFile(databaseFile, (err, data) => {
            if (err) {
                throw err
            }
            const db = JSON.parse(data)
            db.push(newCube)

            fs.writeFile(databaseFile, JSON.stringify(db), error => {
                if(error) {
                    throw error
                }
                console.log('New cube is succesfully stored')
            })
        })
    }
}

module.exports = Cube