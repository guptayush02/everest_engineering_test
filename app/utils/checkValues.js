const { calculateCost } = require("./calculation")
const getCoupon = require("./getCoupon")

const checkValues = (values, i, package) => {
  const { coupon: appliedCoupon, numberOfPackage } = values
  package = {...values}
  const coupon = getCoupon(appliedCoupon)
  return calculateCost(values, i, package, coupon)
}

module.exports = {checkValues}
