const withImages = require('next-images')
const withPWA = require('next-pwa');

module.exports = withPWA(withImages(
    {
        env: {
            apiURL: 'http://localhost:4000',
            frontendUrl: 'http://localhost:3000'
        },
        pwa: {
            dest: 'public',
            register: true, 
            skipWaiting: true,
        }
    } 
    
));
