const DrinkStatus = {
  PENDING: Symbol("drinkStatusPending"),
  PROCESSING: Symbol("drinkStatusProcessing"),
  COMPLETED: Symbol("drinkStatusCompleted"),
};

class Drink {
  constructor(orderId, menuId) {
    this.orderId = orderId;
    this.menuId = menuId;
    this.status = DrinkStatus.PENDING;
  }

  updateStatus(status) {
    if (status !== DrinkStatus.PENDING && status !== DrinkStatus.PROCESSING && status !== DrinkStatus.COMPLETED)
      return false;
    
    this.status = status;
    return true;
  }

  getStatusToText() {
    switch (this.status) {
      case DrinkStatus.PENDING:
        return "대기중";
      case DrinkStatus.PROCESSING:
        return "진행중"
      case DrinkStatus.COMPLETED:
        return "완성";
    }
  }
}

module.exports = { Drink, DrinkStatus };