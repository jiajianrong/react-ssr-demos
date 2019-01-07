module.exports = {
    
    sum: (...params) => {
        return params.reduce((total, current)=>(total+current))
    }
};

//var r = module.exports.sum(1,2,4,5,6)
//console.log(r)
