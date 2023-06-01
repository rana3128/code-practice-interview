let input = {
  "a": 1,
  "b": {
    "ba": 21,
    "bb": 22,
    "bc": null,
    "bd": {
      "bda": 241,
      "bdb": 242
    }
  },
  "c": null,
  "d": {
    "da": 41
  }
}

function flatten(obj) {
  const stack = [{ parent: "", obj }];

  const result = {}

  while (stack.length) {
    const currentObj = stack.pop();
    if (currentObj.obj) {
      Object.keys(currentObj.obj).forEach(key => {
        if (currentObj.obj[key] !== null && typeof currentObj.obj[key] == "object") {
          stack.push({
            parent: currentObj.parent + "_" + key,
            obj: currentObj.obj[key]
          })
        } else {
          const parrent = currentObj.parent ? `${currentObj.parent}_${key}` : key
          result[parrent] = currentObj.obj[key]
        }
      })
    }
  }

  return result;
}

console.log(flatten(input));