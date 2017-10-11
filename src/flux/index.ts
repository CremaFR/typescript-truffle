
export * from './action';
export * from './reducing';
export * from './dispatch';

export type MapState<T> = {
    ids: string[],
    byId: MapType<T>
}

export function emptyMapState<T>(): MapState<T> {
    return { ids: [], byId: {} };
}

export type Supplier<T> = () => T;
export type Mapper<A, B> = ( obj: A ) => B;
export type Predicate<A> = ( obj: A ) => boolean;
export type Reducer<A, B> = ( acc: A, c: B) => A;
export type MapType<T> = { [id: string]: T };
export type Optional<T> = T | null | undefined;
