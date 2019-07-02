export class TrainData {
  constructor(
    id,
    origin,
    destination,
    departureTime,
    arrivalTime,
    firstClassNormalPrice,
    secondClassNormalPrice,
    firstClassSpotPrice,
    secondClassSpotPrice,
    availableFirstClass,
    availableSecondClass,
    capacityFirstClass,
    capacitySecondClass
  ) {
    this.id = id;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    var hourDifference =
      Number(arrivalTime.split(":")[0]) - Number(departureTime.split(":")[0]);
    var minuteDifference =
      Number(arrivalTime.split(":")[1]) - Number(departureTime.split(":")[1]);
    this.travelTime = hourDifference + ":" + minuteDifference; // This is the difference of start time and end time in milliseconds
    this.origin = origin;
    this.destination = destination;
    this.firstClassNormalPrice = firstClassNormalPrice;
    this.secondClassNormalPrice = secondClassNormalPrice;
    this.firstClassSpotPrice = firstClassSpotPrice;
    this.secondClassSpotPrice = secondClassSpotPrice;
    this.discountPercentage = 1 - firstClassSpotPrice / firstClassNormalPrice;
    this.availableFirstClass = availableFirstClass;
    this.availableSecondClass = availableSecondClass;
    this.capacityFirstClass = capacityFirstClass;
    this.capacitySecondClass = capacitySecondClass;
  }
}
