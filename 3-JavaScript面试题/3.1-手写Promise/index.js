class MyPromise {
  state = "pending";
  value = undefined; // 成功后的值
  reason = undefined; // 失败后的值

  resolveCallbacks = []; // pending状态下存储成功的回调
  rejectCallbacks = []; // pending状态下存储失败的回调

  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === "pending") {
        this.state = "resolved";
        this.value = value;
        this.resolveCallbacks.forEach((fn) => fn(this.value));
      }
    };

    const rejectHandler = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.rejectCallbacks.forEach((fn) => fn(this.reason));
      }
    };

    try {
      fn(resolveHandler, rejectHandler);
    } catch (error) {
      rejectHandler(error);
    }
  }

  then(fn1, fn2) {
    fn1 = typeof fn1 === "function" ? fn1 : (v) => v;
    fn2 = typeof fn2 === "function" ? fn2 : (e) => e;

    // 当pending状态下，fn1 fn2会被存储到callbacks中
    if (this.state === "pending") {
      return new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value);
            resolve(newValue);
          } catch (error) {
            reject(error);
          }
        });

        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason);
            reject(newReason);
          } catch (error) {
            reject(error);
          }
        });
      });
    }

    if (this.state === "resolved") {
      return new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value);
          resolve(newValue);
        } catch (error) {
          reject(error);
        }
      });
    }

    if (this.state === "rejected") {
      return new MyPromise((resove, reject) => {
        try {
          const newReason = fn2(this.reason);
          reject(newReason);
        } catch (error) {
          reject(error);
        }
      });
    }
  }

  // then的语法糖
  catch(fn) {
    return this.then(null, fn);
  }
}

MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    resolve(value);
  });
};

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};

MyPromise.all = function (promiseList = []) {
  return new Promise((resolve, reject) => {
    const result = [];
    const length = promiseList.length;
    let resolvedCount = 0;

    promiseList.forEach((promise) => {
      promise
        .then((data) => {
          result.push(data);

          resolvedCount++;
          if (resolvedCount === length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

MyPromise.race = function (promiseList = []) {
  return new Promise((resolve, reject) => {
    let resolved = false; // 标记
    promiseList.forEach((promise) => {
      promise
        .then((data) => {
          if (!resolved) {
            resolve(data);
            resolved = true;
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const p1 = new MyPromise((resolve, reject) => {
  resolve(100);
  // reject(300);
});

console.log(p1);

// promise.then()
p1.then((res) => {
  console.log(res);
  return res + 1;
}).then((res) => {
  console.log(res);
});

// Promise.resolve()
const p2 = MyPromise.resolve(100);
const p3 = MyPromise.reject(200);
const p4 = MyPromise.resolve(300);
console.log("p2", p2);
console.log("p3", p3);

// Promise.all
const p5 = MyPromise.all([p2, p3]);
p5.then((res) => {
  console.log("p5", res);
});

const p6 = MyPromise.all([p2, p4]);
p6.then((res) => {
  console.log("p6", res);
});

// Promise.race
const p7 = MyPromise.race([p2, p3]);
p7.then((res) => {
  console.log(res);
});
