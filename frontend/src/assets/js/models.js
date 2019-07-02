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
    var travel = new Date(endTime.valueOf() - startTime.valueOf());
    this.travelTime = travel.getHours() + ":" + travel.getMinutes(); // This is the difference of start time and end time in milliseconds
    this.startLocation = startLocation;
    this.endLocation = endLocation;
    this.firstClassPrice = firstClassPrice;
    this.secondClassPrice = secondClassPrice;
    this.discountPercentage = discountPercentage;
  }
}
