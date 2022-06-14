const packagesVehicleAllocation = (vehicles, packages) => {
  let vehicleAllocatedPackage = []
  let vehicleAllocatedPackageObj = {}
  let index = 0

  for (let i = 0; i < vehicles.length; i ++) {
    let total = 0

    for (let j = index; j < packages.length; j ++) {
      if (parseInt(packages[j].weight) !==  parseInt(vehicles[i].maxCarriableWeight)) {

        total += parseInt(packages[j].weight)
        if (total <= parseInt(vehicles[i].maxCarriableWeight)) {

          vehicleAllocatedPackageObj = {
            ...packages[j],
            vehicleId: vehicles[i].vehicleId
          }
          vehicleAllocatedPackage.push({...vehicleAllocatedPackageObj})

        } else {
          index = j
          break
        }

      } else {
        if (total === 0) {

          vehicleAllocatedPackageObj = {
            ...packages[j],
            vehicleId: vehicles[i].vehicleId
          }
          vehicleAllocatedPackage.push({...vehicleAllocatedPackageObj})

        }

        index = j
        break
      }
    }
  }

  return vehicleAllocatedPackage
}

module.exports = {packagesVehicleAllocation}
