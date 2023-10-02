const cds = require('@sap/cds')
module.exports = cds.service.impl(function () {
    this.on('sleep', async () => {
    try {
        let dbQuery = ' Call "sleep"( )'
        let result = await cds.run(dbQuery, { })
        console.log(result)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
    }),
    this.on('books', async () => {
        try {
            let dbQuery = ' Call "books"( )'
            let result = await cds.run(dbQuery, { })
            console.log(result)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
        }),
    this.on('insert', async () => {
        try {
            let dbQuery = ' Call "insert"( )'
            let result = await cds.run(dbQuery, { })
            console.log(result)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
        }),
        this.on('newgenre', async (req) => {
            try {
                const { id, name } = req.data;
                let dbQuery = `Call "newgenre"("ID" => ${id}, "NAME" => '${name}')`;
                let result = await cds.run(dbQuery, { })
                console.log(result)
                return true
            } catch (error) {
                console.error(error)
                return false
            }
            })
});