const getCoupon = require("./getCoupon")

exports.isValidNumber = (input) => {
  if (Number(input)) {
    return true
  } else {
    return console.log('Please Enter a Valid Number')
  }
}

exports.isValidCoupon = async(input) => {
  const coupon = await getCoupon(input)
  if (coupon) {
    return true
  }
  return false
}
