import { DateTime } from 'luxon';

export default class Model {
  createModel(value, CreateClass) {
    const arrayType = Array.isArray(value);

    const objectType = typeof value === 'object' && value !== null && !Array.isArray(value);

    const incorrectType = [
      value === null,
      typeof value === 'undefined',
      Number.isInteger(value),
      typeof value === 'string',
      typeof value === 'boolean',
    ].includes(true);

    if (incorrectType) {
      return null;
    }

    if (arrayType) {
      const createdArray = [];

      value.forEach((element) => {
        createdArray.push(new CreateClass(element).getModel());
      });

      return createdArray;
    } else if (objectType) {
      return value;
    }
  }

  createInteger(value, convert) {
    const rightType = Number.isInteger(value);
    const incorrectType = [
      Array.isArray(value),
      typeof value === 'object' && value !== null && !Array.isArray(value),
      value === null,
      typeof value === 'undefined',
      typeof value === 'boolean',
    ].includes(true);

    const stringType = [typeof value === 'string'];

    if (incorrectType) return null;

    if (rightType) return value;

    if (convert) {
      if (stringType) return Number(value);
    } else {
      return null;
    }
  }

  createString(value, convert) {
    const rightType = typeof value === 'string';
    const incorrectType = [
      Array.isArray(value),
      typeof value === 'object' && value !== null && !Array.isArray(value),
      value === null,
      typeof value === 'undefined',
      typeof value === 'boolean',
    ].includes(true);

    const integerType = Number.isInteger(value);

    if (incorrectType) return null;

    if (rightType) return value;

    if (convert) {
      if (integerType) return toString(value);
    } else {
      return null;
    }
  }

  createBoolean(value) {
    const rightType = typeof value === 'boolean';
    const incorrectType = [
      Array.isArray(value),
      typeof value === 'object' && value !== null && !Array.isArray(value),
      value === null,
      typeof value === 'undefined',
      Number.isInteger(value),
      typeof value === 'string',
    ].includes(true);

    if (incorrectType) return null;

    if (rightType) return value;
  }

  createObject(value) {
    const rightType = typeof value === 'object' && value !== null && !Array.isArray(value);
    const incorrectType = [
      Array.isArray(value),
      value === null,
      typeof value === 'undefined',
      typeof value === 'boolean',
      Number.isInteger(value),
      typeof value === 'string',
    ].includes(true);

    if (incorrectType) return null;

    if (rightType) return value;
  }

  createArray(value) {
    const rightType = Array.isArray(value);
    const incorrectType = [
      typeof value === 'object' && value !== null && !Array.isArray(value),
      value === null,
      typeof value === 'undefined',
      typeof value === 'boolean',
      Number.isInteger(value),
      typeof value === 'string',
    ].includes(true);

    if (incorrectType) return null;

    if (rightType) return value;
  }

  createDate(value) {
    const rightType = typeof value === 'string';
    const incorrectType = [
      Array.isArray(value),
      typeof value === 'object' && value !== null && !Array.isArray(value),
      value === null,
      typeof value === 'undefined',
      typeof value === 'boolean',
      Number.isInteger(value),
    ].includes(true);

    if (incorrectType) {
      return null;
    }

    if (rightType) {
      if (DateTime.fromISO(value).isValid) {
        return value;
      } else {
        return null;
      }
    }
  }
}
