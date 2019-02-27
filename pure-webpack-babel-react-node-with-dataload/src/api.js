const sleep = (n) => {
    return new Promise(resolve=>{
        setTimeout( ()=>resolve(), n )
    })
}


module.exports = {
    getUsername: async () => {
        await sleep(1000)
        return 'jiajianrong'
    }
}
