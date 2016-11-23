import * as knockout from "knockout";

declare global {    
    interface SubscribableFunctions<T>{
        whenNotNull: () => Promise<T>;
    }
}

export function register(){
    knockout.subscribable.fn['whenNotNull'] = function() {
        if (this()) {
            return Promise.resolve(this());
        } else {
            return new Promise<any>((resolve, reject) => {
                var sub = (<KnockoutSubscribable<any>>this).subscribe(newValue => {
                    resolve(newValue);
                    sub.dispose();
                });
            });
        }
    }
}
