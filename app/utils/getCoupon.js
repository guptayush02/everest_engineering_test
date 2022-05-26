const getCoupon = (value) => {
  const { coupons } = require("../constants")
  const coupon = coupons.find((coupon) => coupon.code === value)
  if (!coupon) {
    return false
  }
  return coupon
}

module.exports = getCoupon
