declare global  {
    interface SubscribableFunctions<T> {
        whenNotNull: () => Promise<T>;
    }
}
export declare function register(): void;
export {};
