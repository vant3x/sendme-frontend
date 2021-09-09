const withImages = require('next-images')

module.exports = withImages(
    {
        env: {
            apiURL: 'http://localhost:4000',
            frontendUrl: 'http://localhost:3000'
        }
    }
    
)
