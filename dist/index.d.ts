declare module "knockout" {
    interface SubscribableFunctions<T> {
        whenNotNull: () => Promise<T>;
    }
}
export declare function register(): void;
export {};
