// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (!matrix) {
        return res;
    }
    for (let e = 0; e < matrix.length; e += 1) {
        res =
            e % 2 === 0
                ? res.concat(matrix[e])
                : res.concat(matrix[e].reverse());
    }
    return res;
};
