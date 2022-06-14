const printPackageOutput = (finalProductArray) => {
  return finalProductArray.map((package, key) =>
  console.log(
    package.packageId,
    package.discount,
    package[`totalCost_${package['key']}`],
    package[`estimation_delivery_time${package['key']}_in_hours`] ? package[`estimation_delivery_time${package['key']}_in_hours`] : '')
  )
}

module.exports = { printPackageOutput }
