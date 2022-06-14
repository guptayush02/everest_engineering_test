const { comparePackageByDistance, comparePackageByWeight } = require("./comparePackage")

let finalProductArray = []
const calculateCost = async(values, i, package, coupon) => {
  const { baseDeliveryCost, weight, distance, numberOfPackage } = values
  package.discount = 0;

  const deliveryCost = parseFloat(baseDeliveryCost) + (parseFloat(weight) * 10) + (parseFloat(distance) * 5)
  package[`totalCost_${i + 1}`] = deliveryCost
  package['key'] = i+1

  if (coupon) {
    const { discountInPersantage } = coupon
    const totalDiscount = ((parseFloat(discountInPersantage.toFixed(2)) / 100) * parseFloat(deliveryCost))
    package.discount = totalDiscount;
    let totalCost = 0

    if (parseFloat(deliveryCost) > parseFloat(totalDiscount)) {
      totalCost = parseFloat(deliveryCost) - parseFloat(totalDiscount)
    }
    package[`totalCost_${i + 1}`] = totalCost
  }

  finalProductArray.push({...package}) 
  if (parseInt(i) === parseInt(numberOfPackage) - 1) {
    return finalProductArray
  }
  return
}

const calculateEstimationTime = (packages, vehicle) => {
  packages.forEach((package, key) => {
    package[`estimation_delivery_time${package['key']}_in_hours`] = parseInt(package.distance)/parseInt(vehicle.maxSpeed)
  })
  const sortPackageByWeight = packages.sort(comparePackageByWeight)
  const sortPackageByDistance = sortPackageByWeight.sort(comparePackageByDistance)

  // Check vehicle availablity
  // const availableVehicles = checkVehicle(vehicle)
  // console.log("availableVehicles--->", availableVehicles)
  // let allotedPackageCount = 0
  // console.log("sortPackageByDistance---->", sortPackageByDistance)
  // availableVehicles.forEach((vehicle, key) => {
  //   sortPackageByDistance.map((package) => {
  //     package.vehicleId = vehicle.vehicleId
  //   })
  // })
  return sortPackageByDistance

}

const checkVehicle = (vehicle) => {
  const availableVehicle = []
  for (let i = 0; i < parseInt(vehicle.numberOfVehicles); i ++) {
    const availableVehicleObj = {
      vehicleId: Math.floor(1000 + Math.random() * 9000),
      ...vehicle,
      isAlloted: false
    }
    availableVehicle.push({...availableVehicleObj})
  }
  return availableVehicle
}

const packagesForVehicleAllocation = (vehicle, packages) => {
  let total = 0;
  let index = 0
  for (let i = 0; i < packages.length; i ++) {
    total += packages[i].weight;
    while (total <= parseInt(vehicle.maxCarriableWeight)) {
      packages[i].vehicleId = vehicle.vehicleId
    }
  }
}

module.exports = {calculateCost, calculateEstimationTime}
