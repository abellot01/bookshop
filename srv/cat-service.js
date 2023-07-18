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
    })
})