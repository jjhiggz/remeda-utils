/**
 * The base implementation of `propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
export function basePropertyOf<T>(
  object: T
): (key: string) => T[keyof T] | undefined {
  return (key: string) =>
    object == null ? undefined : (object as any)[key as any];
}

// todo make the typing on this function better at some point
