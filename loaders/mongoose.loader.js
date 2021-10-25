const MongooseLoader = async (mongooseInstance) => {
    if (!mongooseInstance || !mongooseInstance.connection)
        return

    return mongooseInstance;
}

module.exports = MongooseLoader
