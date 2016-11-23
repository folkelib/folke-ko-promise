declare global  {
    interface KnockoutSubscribableFunctions<T> {
        whenNotNull: () => Promise<T>;
    }
}
export declare function register(): void;
export {};
