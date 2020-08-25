module.exports = {
    development: {
        port: process.env.PORT || 3000,
        databaseUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ymlsc.gcp.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
    },
    production: {}
};