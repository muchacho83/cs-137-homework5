function copyObject(source) {
    return Object.assign({}, source);
  }

  const obj1 = { foo: "bar", age: 25 };
const obj2 = copyObject(obj1);
console.log(obj2);