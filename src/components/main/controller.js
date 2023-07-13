async function main(params) {
    const {db} = params;

    await db.collection("example").doc("example").set({
        label: 2
    })
    return "⭐ Exit ⭐"
}

module.exports = {
    main
}