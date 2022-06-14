const comparePackageByDistance = (a, b) => {
  if (a.distance < b.distance) {
    return -1
  }
}

const comparePackageByWeight = (a, b) => {
  if (a.weight > b.weight) {
    return -1
  }
}

module.exports = { comparePackageByDistance, comparePackageByWeight }
