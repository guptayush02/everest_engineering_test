const getCoupon = require("./getCoupon")

exports.isValidNumber = (input) => {
  if (Number(input) >= 0) {
    return true
  } else {
    return console.log('Please Enter a Valid Number')
  }
}

exports.isValidCoupon = (input, answers) => {
  const { coupon: appliedCoupon, weight, distance } = answers
  if (input) {
    const coupon = getCoupon(input)
    const { minWeight, maxWeight, minDistance, maxDistance, code } = coupon
    if (coupon &&
      (parseFloat(weight) >= parseFloat(minWeight) && parseFloat(weight) <= parseFloat(maxWeight)) &&
      (parseFloat(distance) >= parseFloat(minDistance) && parseFloat(distance) <= parseFloat(maxDistance))) {

      return true
    }
    return console.log("Offer Not Valid")
  }
  return true
}
