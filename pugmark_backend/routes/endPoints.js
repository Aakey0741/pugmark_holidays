const initializeEndPoints = (app) => {
    app.use('/pugmark/v1/app', require('./pugmark'));
}

module.exports = initializeEndPoints;