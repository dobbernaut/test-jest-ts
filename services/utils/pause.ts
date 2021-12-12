/**
 * Pause for a number of seconds
 * @param {number} seconds
 */
export const pause = (seconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
