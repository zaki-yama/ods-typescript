export default class ArrayDeque<T> {
  a: Array<T>;
  j: number;
  n: number;

  constructor() {
    this.a = [];
    this.n = 0;
    this.j = 0;
  }

  get(i: number) {
    return this.a[(this.j + i) % this.a.length];
  }

  set(i: number, x: T) {
    const y: T = this.a[(this.j + i) % this.a.length];
    this.a[(this.j + i) % this.a.length] = x;
    return y;
  }

  add(i: number, x: T) {
    if (this.n + 1 >= this.a.length) {
      this.resize();
    }

    if (i < this.n / 2) {
      // a[0], ..., a[i-1] を左に1つずらす
      const j = this.j === 0 ? this.a.length - 1 : this.j - 1;
      for (let k = 0; k <= i - 1; k++) {
        this.a[(j + k) % this.a.length] = this.a[(j + k + 1) % this.a.length];
      }
    } else {
      // a[i], ..., a[n-1] を右に1つずらす
    }
  }

  remove() {
    const x = this.a[this.j];
    this.j = (this.j + 1) % this.a.length;
    this.n--;
    if (this.a.length >= 3 * this.n) {
      this.resize();
    }

  }
  resize() {
    const b = new Array(Math.max(this.n * 2, 1));
    for (let k = 0; k < this.n; k++) {
      b[k] = this.a[(this.j + k) % this.a.length]
    }
    this.a = b;
    this.j = 0;
  }
}