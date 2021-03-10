module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length === 0) return [];

  const newMatrix = matrix.reduce((acc, cur, index) => {
    if (index % 2) cur.reverse();

    return [...acc, ...cur];
  }, []);

  return newMatrix;
}
