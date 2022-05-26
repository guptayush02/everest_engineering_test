const program = require("commander");
const { prompt } = require("inquirer")
const { questions } = require("./constants")
const getCoupon = require("./utils/getCoupon")

program.version("1.0.0").description("Everest Engineering Test: Command Line Application");

program
  .command("getValues")
  .alias("a")
  .description("Get Input From User")
  .action(() => {
    prompt(questions).then((response) => {
      checkValues(response)
    })
  })

program.parse(process.argv);

const checkValues = async(values) => {
  const { coupon: appliedCoupon, weight, distance } = values
  if (appliedCoupon) {
    const coupon = await getCoupon(appliedCoupon)
    const { minWeight, maxWeight, minDistance, maxDistance, code } = coupon
    if ((parseFloat(weight) >= parseFloat(minWeight) && parseFloat(weight) <= parseFloat(maxWeight)) && (parseFloat(distance) >= parseFloat(minDistance) && parseFloat(distance) <= parseFloat(maxDistance))) {
      return calculation(values, coupon)
    } else {
      console.log(`You Are Not Eligible To Apply Coupon: ${code}`)
      console.log("Coupon T&C:")
      console.log(`Min Distance: ${minDistance}`)
      console.log(`Max Distance: ${maxDistance}`)
      console.log(`Min Weight: ${minWeight}`)
      console.log(`Max Weight: ${maxWeight}`)
      return
    }
  } else {
    return calculation(values)
  }
}

const calculation = (values, coupon = null) => {
  const { deliveryCost, weight, distance } = values
  const totalDeliveryCost = parseFloat(deliveryCost) + (parseFloat(weight) * 10) + (parseFloat(distance) * 5)
  if (coupon) {
    const { discountInPersantage } = coupon
    const totalDiscount = ((parseFloat(discountInPersantage.toFixed(2)) / 100) * parseFloat(totalDeliveryCost))
    let costAfterDiscount = 0
    if (parseFloat(totalDeliveryCost) > parseFloat(totalDiscount)) {
      costAfterDiscount = parseFloat(totalDeliveryCost) - parseFloat(totalDiscount)
    }
    console.log(`Total Delivery Cost: ${totalDeliveryCost.toFixed(2)}`)
    console.log(`Total Discount: -${totalDiscount.toFixed(2)}`)
    return console.log(`Total Cost After Applying Coupon: ${totalDeliveryCost.toFixed(2)} - ${totalDiscount.toFixed(2)} = ${costAfterDiscount.toFixed(2)}`)
  } else {
    console.log(`Total Delivery Cost: ${totalDeliveryCost.toFixed(2)}`)
    console.log(`Total Delivery Cost: ${totalDeliveryCost.toFixed(2)}`)
    return console.log(`Total cost: ${totalDeliveryCost.toFixed(2)} - discount ${0} = ${totalDeliveryCost.toFixed(2)}`)
  }
}
