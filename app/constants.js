const { isValidNumber, isValidCoupon } = require("./utils/validation")

exports.details = [
  {
    type: "input",
    name: "baseDeliveryCost",
    message: "Enter Base Delivery Cost",
    validate: isValidNumber
  },
  {
    type: "input",
    name: "numberOfPackage",
    message: "Enter Total Number Of Package",
    validate: isValidNumber
  }
]

exports.questions = [
  {
    type: "input",
    name: "packageId",
    message: "Enter Package Id"
  },
  {
    type: "input",
    name: "weight",
    message: "Enter Weight",
    validate: isValidNumber
  },
  {
    type: "input",
    name: "distance",
    message: "Enter the Distance",
    validate: isValidNumber
  },
  {
    type: "input",
    name: "coupon",
    message: "Apply Coupon",
    validate: isValidCoupon
  }
]

exports.coupons = [
  {
    id: 1,
    code: "OFR001",
    discountInPersantage: 10,
    minDistance: 0,
    maxDistance: 200,
    minWeight: 70,
    maxWeight: 200
  },
  {
    id: 2,
    code: "OFR002",
    discountInPersantage: 7,
    minDistance: 50,
    maxDistance: 150,
    minWeight: 100,
    maxWeight: 250
  },
  {
    id: 3,
    code: "OFR003",
    discountInPersantage: 5,
    minDistance: 50,
    maxDistance: 250,
    minWeight: 10,
    maxWeight: 150
  }
]

exports.vehiclesDetails = [
  {
    type: "input",
    name: "numberOfVehicles",
    message: "Enter Number Of Vehicles",
    validate: isValidNumber
  },
  {
    type: "input",
    name: "maxCarriableWeight",
    message: "Enter Carriable Weight",
    validate: isValidNumber
  },
  {
    type: "input",
    name: "maxSpeed",
    message: "Enter Max Speed",
    validate: isValidNumber
  },
]
