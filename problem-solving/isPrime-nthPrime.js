function isPrime(num) {
  if (num <= 1) return false;

  const numSqrt = Math.sqrt(num);

  if([2,3,5].includes(num)) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 2; i <= numSqrt; i++) {
    if (numSqrt % i === 0) return false;
  }

  return true;
}

function nthPrimeNumber(n) {
  let primes = [];
  let nTmp = 0
  while (primes.length < n) {
    if (isPrime(nTmp)) {
      primes.push(nTmp);
    }
    nTmp++;
  }

  return primes;
}

console.log(nthPrimeNumber(10));

console.log(isPrime(6));
