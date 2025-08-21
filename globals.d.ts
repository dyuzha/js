// globals.d.ts

// declare const describe: (name: string, fn: () => void) => void;
// declare const it: (name: string, fn: () => void) => void;

// interface Assert {
//   equal: (actual: any, expected: any, message?: string) => void;
//   strictEqual: (actual: any, expected: any, message?: string) => void;
//   deepEqual: (actual: any, expected: any, message?: string) => void;
// }

declare const assert: {
  equal: (actual: any, expected: any, message?: string) => void;
};
//
// declare function pow(x: number, n: number): number;
