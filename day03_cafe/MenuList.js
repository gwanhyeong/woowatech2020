class Menu {
  constructor(id, name, requiredTime) {
    this.id = id;
    this.name = name;
    this.requiredTime = requiredTime;
  }
}

class MenuList {
  constructor() {
    this.menus = new Map();
    this.autoIncrementId = 1;
  }

  add(name, requiredTime) {
    const menuId = this.autoIncrementId++;
    this.menus.set(menuId, new Menu(menuId, name, requiredTime));
    return this;
  }

  getMenuById(menuId) {
    const id = Number.parseInt(menuId);
    return this.menus.get(id);
  }

  toTextArray() {
    const textArray = []
    for (let menu of this.menus.values()) {
      textArray.push(`${menu.id}. ${menu.name}(${menu.requiredTime}s)`);
    }

    return textArray;
  }
}

module.exports = MenuList;