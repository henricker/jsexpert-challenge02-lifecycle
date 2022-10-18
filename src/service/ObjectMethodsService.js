class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const objectEnhanced = {
      ...rawObject,
      valueOf: () => {
        return rawObject.age;
      }
    }
    return objectEnhanced;
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const objectEnhanced = {
      ...rawObject,
      toString: () => {
        return `[name="${rawObject.name}",age=${rawObject.age}]`;
      }
    }
    return objectEnhanced;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    const objectEnhanced = {
      ...rawObject,
      [Symbol.toPrimitive]: (hint) => {
        const types = {
          string: `[name="${rawObject.name}",age=${rawObject.age}]`,
          number: rawObject.age
        }

        return types[hint] || types.string;
      }
    }
    return objectEnhanced;
  }
}

module.exports = ObjectMethodsService;
