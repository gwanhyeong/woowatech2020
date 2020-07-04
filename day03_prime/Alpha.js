const Prime = (function () {
  function Prime(number = 0) {
    this.number = number;
    this.factorSet = this.factors();
  }
  
  Prime.prototype.toString = function() {
    return this.number;
  }
  
  Prime.prototype.equalSet = function(aset, bset) {
    if (aset.length !== bset.length) return false;
    for (let a of aset) if (!bset.includes(a)) return false;
    return true;
  }
  
  Prime.prototype.isPrime = function() {
    let primeSet = [1, this.number];
    return this.number > 1 && this.equalSet(this.factors(), primeSet);
  }
  
  Prime.prototype.isFactor = function(potentialFactor) {
    // === 대신 ==을 사용해 비교하는 경우, 엔진에서 타입 자동 변환 이후 비교하기에 의도대로 동작하지 않을 수 있다.
    return this.number % potentialFactor === 0;
  }
  
  Prime.prototype.factors = function() {
    if (this.factorSet) return this.factorSet;
    
    let factorSet = [];
    for (let pod = 1; pod <= Math.sqrt(this.number); pod++ ) {
        if (this.isFactor(pod)) {
            factorSet.push(pod);
            factorSet.push(this.number / pod);
        }
    }
    return factorSet;
  }
  
  Prime.prototype.isPerfect = function() {
    let currentFactor = this.factors();
    return (this.sum(currentFactor) - this.number) === this.number 
  }
  
  Prime.prototype.isAbundant = function() {
    let currentFactor = this.factors();
    return (this.sum(currentFactor) - this.number) > this.number 
  }
  
  Prime.prototype.isDeficient = function() {
    let currentFactor = this.factors();
    return (this.sum(currentFactor) - this.number) < this.number 
  }
  
  Prime.prototype.sum = function(factors) {
    return factors.reduce((acc, cv) => {
      return acc + cv;
    }, 0);
  }

  return Prime;
})();


let alpha1 = new Prime(10);
let alpha2 = new Prime(6);
let alpha3 = new Prime();

console.log(alpha1.isPerfect());
console.log(alpha2.isPerfect());
console.log(alpha3.isPerfect());

console.log(alpha1.isPrime());
console.log(alpha2.isPrime());

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let logs = numbers.reduce((acc, cv) => {
  let num = new Prime(cv);
  let result = [];

  if (num.isPerfect()) result.push('perfect');
  if (num.isAbundant()) result.push('abundant');
  if (num.isDeficient()) result.push('deficient');
  if (num.isPrime()) result.push('prime');

  acc.push(`${num}: ${result.join(', ')}`);
  return acc;
}, []);

for (let i in logs) {
  console.log(logs[i]);
}