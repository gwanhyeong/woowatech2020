class PrimeAlpha {
    constructor(number) {
        this.number = number
    }

    equalSet(aset, bset) {
        if (aset.length!== bset.length) return false;
        for (var a of aset) if (!bset.includes(a)) return false;
        return true;
    }

    isPrime() {
        var primeSet = [1, this.number];
        return this.number > 1 && this.equalSet(this.factors(), primeSet);
    }

    isFactor(potentialFactor) {
        return this.number % potentialFactor == 0;
    }

    factors() {
        var factorSet = [];
        for (var pod = 1; pod <= Math.sqrt(this.number); pod++ ) {
            if (this.isFactor(pod)) {
                factorSet.push(pod);
                factorSet.push(this.number / pod);
            }
        }
        return factorSet;
    }
}

var prime1 = new PrimeAlpha(10);
var prime2 = new PrimeAlpha(7);

console.log(prime1.isPrime());
console.log(prime2.isPrime());