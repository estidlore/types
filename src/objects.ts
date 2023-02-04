type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A
    ? A[K]
    : K extends keyof B
    ? B[K]
    : never;
};

type PartialDeep<T> = T extends object
  ? {
      [K in keyof T]?: PartialDeep<T[K]>;
    }
  : T;

interface RecordDeep<T = string> {
  [k: string]: T | RecordDeep<T>;
}

export type { Merge, PartialDeep, RecordDeep };
