const { v4 } = require('uuid')
const fs = require('fs')
const path = require('path')

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = v4()
        this.name = name || 'No name'
        this.description = description
        this.imageUrl = imageUrl || 'placeholder'
        this.difficulty = difficulty || 0
    }

    save() {
        const data = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        }


        fs.writeFile(path.join(__dirname, '..', 'config/database.json'), JSON.stringify(data), error => {
            if(error) {
                throw error
            }
            console.log('New cube is succesfully stored')
        })
    }
}

module.exports = Cube