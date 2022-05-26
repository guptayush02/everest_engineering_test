const getCoupon = (value) => {
  const { coupons } = require("../constants")
  const coupon = coupons.find((coupon) => coupon.code === value)
  if (!coupon) {
    return console.log("Please Enter A Valid Coupon")
  }
  return coupon
}

module.exports = getCoupon
