module.exports = {
    
    sum: (...params) => {
        return params.reduce((total, current)=>(total+current))
    },
    
    /*sum: function(...params) {
        return params.reduce(function (total, current) {
            return total+current+1
        })
    },*/
};

//var r = module.exports.sum(1,2,4,5,6)
//console.log(r)
