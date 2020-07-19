import ExpressApp from '../../app'

export function route(url: string, method?: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        ExpressApp[(method || 'all').toLowerCase()](url, descriptor.value)
    };
}