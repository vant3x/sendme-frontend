const withImages = require('next-images')

module.exports = withImages(
    {
        env: {
            apiURL: 'https://sendmefiles.xyz',
            frontendUrl: 'https://sendmefiles.cloud'
        }
    }
    
)
