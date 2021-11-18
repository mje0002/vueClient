
/**
 * Used to define the namespace area for a specific module. 
 * Typescript is unable to understand the format module/action. This 
 * helps to bridge that gap and it prevents dispatch from telling another module with
 * the same action from executing.
 */
export type Namespaced<T, N extends string> = {
    [P in keyof T & string as `${N}/${P}`]: T[P];
};
