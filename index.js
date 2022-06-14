const program = require("commander");
const { prompt } = require("inquirer")
const { questions, details, vehiclesDetails } = require("./app/constants")
const { calculateEstimationTime } = require("./app/utils/calculation")
const { checkValues } = require("./app/utils/checkValues")
const { printPackageOutput } = require("./app/utils/output")

program
  .command("deliveryCostEstimationWithOffers")
  .alias("a")
  .description("Get Input From User")
  .action(() => {
    prompt(details).then(async(response) => {

      let package = await getFinalPackage(response)
      printPackageOutput(package)
    })
  })

program
  .command("calculateEstimationDeliveryTime")
  .alias("a")
  .description("Get Input From User")
  .action(() => {
    prompt(details).then(async(response) => {
      let package = await getFinalPackage(response)

      if (package && package.length) {
        prompt(vehiclesDetails).then(async(resp) => {
          package = calculateEstimationTime(package, resp)
          printPackageOutput(package)
        })
      }

    })
  })

const getFinalPackage = async(response) => {
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
  return finalPackage
}

program.parse(process.argv);
