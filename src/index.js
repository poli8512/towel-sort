
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let forth=true
    let matr=matrix
    let retArr=[]
    matr && matr.forEach(element => {
        let elem=element
        if(!forth){
            elem= element.reverse()
        }
        elem.forEach(el=>{
            retArr.push(el)
        })
        forth=!forth
    });
    return retArr

}
