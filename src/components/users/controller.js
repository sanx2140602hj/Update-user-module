async function addUser(params){
    const {
        auth,
        email,
        password,
        displayName
    } = params;

    const user = await auth.createUser({
        email,
        password,
        displayName
    });

    return user;
}

async function getUser(params){
    const {
        auth,
        email 
    } = params;

    const user = await auth.getUserByEmail(email);

    return user;
}

async function updateUser(params){
    const {
        uid,
        password,
        displayName
    } = params;

    const user = await auth.updateUser({
        uid,
        password,
        displayName
    });

    return user;
}

module.exports = {
    addUser,
    getUser,
    updateUser
}