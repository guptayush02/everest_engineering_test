const program = require("commander");
const { prompt } = require("inquirer")
const { questions, details, vehiclesDetails } = require("./app/constants")
const getCoupon = require("./app/utils/getCoupon")
const { calculateCost, calculateEstimationTime } = require("./app/utils/calculation")


program
  .command("deliveryCostEstimationWithOffers")
  .alias("a")
  .description("Get Input From User")
  .action(() => {
    prompt(details).then(async(response) => {
      let package = {}
      let finalPackage
      for (let i = 0; i < response.numberOfPackage; i ++) {
        questions.map((q) => q.baseDeliveryCost = response.baseDeliveryCost)
        await prompt(questions).then(async(res) => {
          res.baseDeliveryCost = response.baseDeliveryCost
          res.numberOfPackage = response.numberOfPackage
          finalPackage = await checkValues(res, i, package)
        })
      }
      printProductCostResult(finalPackage)
    })
  })

program
  .command("calculateEstimationDeliveryTime")
  .alias("a")
  .description("Get Input From User")
  .action(() => {
    prompt(details).then(async(response) => {
      let package = {}
      let finalPackage
      for (let i = 0; i < response.numberOfPackage; i ++) {
        questions.map((q) => q.baseDeliveryCost = response.baseDeliveryCost)
        await prompt(questions).then(async(res) => {
          res.baseDeliveryCost = response.baseDeliveryCost
          res.numberOfPackage = response.numberOfPackage
          finalPackage = await checkValues(res, i, package)
        })
      }

      if (finalPackage && finalPackage.length) {
        prompt(vehiclesDetails).then(async(resp) => {
          finalPackage = await calculateEstimationTime(finalPackage, resp)
          printProductCostResult(finalPackage)
        })
      }
    })
  })

program.parse(process.argv);

const checkValues = (values, i, package) => {
  const { coupon: appliedCoupon, numberOfPackage } = values
  package = {...values}
  const coupon = getCoupon(appliedCoupon)
  return calculateCost(values, i, package, coupon)
}

const printProductCostResult = (finalProductArray) => {
  return finalProductArray.map((package, key) =>
  console.log(
    package.packageId,
    package.discount,
    package[`totalCost_${package['key']}`],
    package[`estimation_delivery_time${package['key']}_in_hours`] ? package[`estimation_delivery_time${package['key']}_in_hours`] : '')
  )
}
