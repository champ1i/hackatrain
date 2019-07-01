export class TrainData {
  constructor(
    id,
    startTime,
    endTime,
    startLocation,
    endLocation,
    firstClassPrice,
    secondClassPrice,
    discountPercentage
  ) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.travelTime = endTime.valueOf() - startTime.valueOf(); // This is the difference of start time and end time in milliseconds
    this.startLocation = startLocation;
    this.endLocation = endLocation;
    this.firstClassPrice = firstClassPrice;
    this.secondClassPrice = secondClassPrice;
    this.discountPercentage = discountPercentage;
  }
}
