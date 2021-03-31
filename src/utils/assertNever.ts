export const assertNever = (value: never) => {
  throw new Error(`Unexpected value: ${value}. Should have been never.`);
};
