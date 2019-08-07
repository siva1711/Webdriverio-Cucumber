module.exports.getDBConfig = function () {

   //we can return environment specific details here
    return {
        user: 'userName',
        password: 'password',
        connectString: 'connectionString'
    }
}