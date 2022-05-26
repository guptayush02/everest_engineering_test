const { isValidNumber, isValidCoupon } = require("./utils/validation")

exports.questions = [
  {
    type: "input",
    name: "deliveryCost",
    message: "Enter Delivery cost",
    validate: isValidNumber
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
    code: "OFR001",
    discountInPersantage: 10,
    minDistance: 0,
    maxDistance: 200,
    minWeight: 70,
    maxWeight: 200
  },
  {
    code: "OFR002",
    discountInPersantage: 7,
    minDistance: 50,
    maxDistance: 150,
    minWeight: 100,
    maxWeight: 250
  },
  {
    code: "OFR003",
    discountInPersantage: 5,
    minDistance: 50,
    maxDistance: 250,
    minWeight: 10,
    maxWeight: 150
  }
]
