
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Geodata
 * 
 */
export type Geodata = $Result.DefaultSelection<Prisma.$GeodataPayload>
/**
 * Model PlaceData
 * 
 */
export type PlaceData = $Result.DefaultSelection<Prisma.$PlaceDataPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.geodata`: Exposes CRUD operations for the **Geodata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Geodata
    * const geodata = await prisma.geodata.findMany()
    * ```
    */
  get geodata(): Prisma.GeodataDelegate<ExtArgs>;

  /**
   * `prisma.placeData`: Exposes CRUD operations for the **PlaceData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaceData
    * const placeData = await prisma.placeData.findMany()
    * ```
    */
  get placeData(): Prisma.PlaceDataDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Geodata: 'Geodata',
    PlaceData: 'PlaceData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account" | "geodata" | "placeData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Geodata: {
        payload: Prisma.$GeodataPayload<ExtArgs>
        fields: Prisma.GeodataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeodataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeodataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload>
          }
          findFirst: {
            args: Prisma.GeodataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeodataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload>
          }
          findMany: {
            args: Prisma.GeodataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload>[]
          }
          create: {
            args: Prisma.GeodataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload>
          }
          createMany: {
            args: Prisma.GeodataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeodataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload>[]
          }
          delete: {
            args: Prisma.GeodataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload>
          }
          update: {
            args: Prisma.GeodataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload>
          }
          deleteMany: {
            args: Prisma.GeodataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeodataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeodataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeodataPayload>
          }
          aggregate: {
            args: Prisma.GeodataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeodata>
          }
          groupBy: {
            args: Prisma.GeodataGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeodataGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeodataCountArgs<ExtArgs>
            result: $Utils.Optional<GeodataCountAggregateOutputType> | number
          }
        }
      }
      PlaceData: {
        payload: Prisma.$PlaceDataPayload<ExtArgs>
        fields: Prisma.PlaceDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          findFirst: {
            args: Prisma.PlaceDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          findMany: {
            args: Prisma.PlaceDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>[]
          }
          create: {
            args: Prisma.PlaceDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          createMany: {
            args: Prisma.PlaceDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaceDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>[]
          }
          delete: {
            args: Prisma.PlaceDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          update: {
            args: Prisma.PlaceDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          deleteMany: {
            args: Prisma.PlaceDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaceDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceDataPayload>
          }
          aggregate: {
            args: Prisma.PlaceDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaceData>
          }
          groupBy: {
            args: Prisma.PlaceDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceDataCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    Geodata: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Geodata?: boolean | AccountCountOutputTypeCountGeodataArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountGeodataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeodataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    age: number | null
  }

  export type AccountSumAggregateOutputType = {
    age: number | null
  }

  export type AccountMinAggregateOutputType = {
    accountid: string | null
    userid: string | null
    email: string | null
    age: number | null
    accountname: string | null
    icon: string | null
  }

  export type AccountMaxAggregateOutputType = {
    accountid: string | null
    userid: string | null
    email: string | null
    age: number | null
    accountname: string | null
    icon: string | null
  }

  export type AccountCountAggregateOutputType = {
    accountid: number
    userid: number
    email: number
    age: number
    accountname: number
    icon: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    age?: true
  }

  export type AccountSumAggregateInputType = {
    age?: true
  }

  export type AccountMinAggregateInputType = {
    accountid?: true
    userid?: true
    email?: true
    age?: true
    accountname?: true
    icon?: true
  }

  export type AccountMaxAggregateInputType = {
    accountid?: true
    userid?: true
    email?: true
    age?: true
    accountname?: true
    icon?: true
  }

  export type AccountCountAggregateInputType = {
    accountid?: true
    userid?: true
    email?: true
    age?: true
    accountname?: true
    icon?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    accountid: string
    userid: string | null
    email: string
    age: number | null
    accountname: string | null
    icon: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountid?: boolean
    userid?: boolean
    email?: boolean
    age?: boolean
    accountname?: boolean
    icon?: boolean
    Geodata?: boolean | Account$GeodataArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountid?: boolean
    userid?: boolean
    email?: boolean
    age?: boolean
    accountname?: boolean
    icon?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    accountid?: boolean
    userid?: boolean
    email?: boolean
    age?: boolean
    accountname?: boolean
    icon?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Geodata?: boolean | Account$GeodataArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      Geodata: Prisma.$GeodataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      accountid: string
      userid: string | null
      email: string
      age: number | null
      accountname: string | null
      icon: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `accountid`
     * const accountWithAccountidOnly = await prisma.account.findMany({ select: { accountid: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `accountid`
     * const accountWithAccountidOnly = await prisma.account.createManyAndReturn({ 
     *   select: { accountid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Geodata<T extends Account$GeodataArgs<ExtArgs> = {}>(args?: Subset<T, Account$GeodataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly accountid: FieldRef<"Account", 'String'>
    readonly userid: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly age: FieldRef<"Account", 'Int'>
    readonly accountname: FieldRef<"Account", 'String'>
    readonly icon: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.Geodata
   */
  export type Account$GeodataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    where?: GeodataWhereInput
    orderBy?: GeodataOrderByWithRelationInput | GeodataOrderByWithRelationInput[]
    cursor?: GeodataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeodataScalarFieldEnum | GeodataScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Geodata
   */

  export type AggregateGeodata = {
    _count: GeodataCountAggregateOutputType | null
    _avg: GeodataAvgAggregateOutputType | null
    _sum: GeodataSumAggregateOutputType | null
    _min: GeodataMinAggregateOutputType | null
    _max: GeodataMaxAggregateOutputType | null
  }

  export type GeodataAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type GeodataSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type GeodataMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    latitude: number | null
    longitude: number | null
    logdate: Date | null
  }

  export type GeodataMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    latitude: number | null
    longitude: number | null
    logdate: Date | null
  }

  export type GeodataCountAggregateOutputType = {
    id: number
    authorId: number
    latitude: number
    longitude: number
    logdate: number
    _all: number
  }


  export type GeodataAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type GeodataSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type GeodataMinAggregateInputType = {
    id?: true
    authorId?: true
    latitude?: true
    longitude?: true
    logdate?: true
  }

  export type GeodataMaxAggregateInputType = {
    id?: true
    authorId?: true
    latitude?: true
    longitude?: true
    logdate?: true
  }

  export type GeodataCountAggregateInputType = {
    id?: true
    authorId?: true
    latitude?: true
    longitude?: true
    logdate?: true
    _all?: true
  }

  export type GeodataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Geodata to aggregate.
     */
    where?: GeodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geodata to fetch.
     */
    orderBy?: GeodataOrderByWithRelationInput | GeodataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geodata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geodata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Geodata
    **/
    _count?: true | GeodataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeodataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeodataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeodataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeodataMaxAggregateInputType
  }

  export type GetGeodataAggregateType<T extends GeodataAggregateArgs> = {
        [P in keyof T & keyof AggregateGeodata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeodata[P]>
      : GetScalarType<T[P], AggregateGeodata[P]>
  }




  export type GeodataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeodataWhereInput
    orderBy?: GeodataOrderByWithAggregationInput | GeodataOrderByWithAggregationInput[]
    by: GeodataScalarFieldEnum[] | GeodataScalarFieldEnum
    having?: GeodataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeodataCountAggregateInputType | true
    _avg?: GeodataAvgAggregateInputType
    _sum?: GeodataSumAggregateInputType
    _min?: GeodataMinAggregateInputType
    _max?: GeodataMaxAggregateInputType
  }

  export type GeodataGroupByOutputType = {
    id: string
    authorId: string
    latitude: number
    longitude: number
    logdate: Date
    _count: GeodataCountAggregateOutputType | null
    _avg: GeodataAvgAggregateOutputType | null
    _sum: GeodataSumAggregateOutputType | null
    _min: GeodataMinAggregateOutputType | null
    _max: GeodataMaxAggregateOutputType | null
  }

  type GetGeodataGroupByPayload<T extends GeodataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeodataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeodataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeodataGroupByOutputType[P]>
            : GetScalarType<T[P], GeodataGroupByOutputType[P]>
        }
      >
    >


  export type GeodataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    latitude?: boolean
    longitude?: boolean
    logdate?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["geodata"]>

  export type GeodataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    latitude?: boolean
    longitude?: boolean
    logdate?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["geodata"]>

  export type GeodataSelectScalar = {
    id?: boolean
    authorId?: boolean
    latitude?: boolean
    longitude?: boolean
    logdate?: boolean
  }

  export type GeodataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GeodataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $GeodataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Geodata"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      latitude: number
      longitude: number
      logdate: Date
    }, ExtArgs["result"]["geodata"]>
    composites: {}
  }

  type GeodataGetPayload<S extends boolean | null | undefined | GeodataDefaultArgs> = $Result.GetResult<Prisma.$GeodataPayload, S>

  type GeodataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GeodataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GeodataCountAggregateInputType | true
    }

  export interface GeodataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Geodata'], meta: { name: 'Geodata' } }
    /**
     * Find zero or one Geodata that matches the filter.
     * @param {GeodataFindUniqueArgs} args - Arguments to find a Geodata
     * @example
     * // Get one Geodata
     * const geodata = await prisma.geodata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeodataFindUniqueArgs>(args: SelectSubset<T, GeodataFindUniqueArgs<ExtArgs>>): Prisma__GeodataClient<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Geodata that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GeodataFindUniqueOrThrowArgs} args - Arguments to find a Geodata
     * @example
     * // Get one Geodata
     * const geodata = await prisma.geodata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeodataFindUniqueOrThrowArgs>(args: SelectSubset<T, GeodataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeodataClient<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Geodata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeodataFindFirstArgs} args - Arguments to find a Geodata
     * @example
     * // Get one Geodata
     * const geodata = await prisma.geodata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeodataFindFirstArgs>(args?: SelectSubset<T, GeodataFindFirstArgs<ExtArgs>>): Prisma__GeodataClient<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Geodata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeodataFindFirstOrThrowArgs} args - Arguments to find a Geodata
     * @example
     * // Get one Geodata
     * const geodata = await prisma.geodata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeodataFindFirstOrThrowArgs>(args?: SelectSubset<T, GeodataFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeodataClient<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Geodata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeodataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Geodata
     * const geodata = await prisma.geodata.findMany()
     * 
     * // Get first 10 Geodata
     * const geodata = await prisma.geodata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const geodataWithIdOnly = await prisma.geodata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeodataFindManyArgs>(args?: SelectSubset<T, GeodataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Geodata.
     * @param {GeodataCreateArgs} args - Arguments to create a Geodata.
     * @example
     * // Create one Geodata
     * const Geodata = await prisma.geodata.create({
     *   data: {
     *     // ... data to create a Geodata
     *   }
     * })
     * 
     */
    create<T extends GeodataCreateArgs>(args: SelectSubset<T, GeodataCreateArgs<ExtArgs>>): Prisma__GeodataClient<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Geodata.
     * @param {GeodataCreateManyArgs} args - Arguments to create many Geodata.
     * @example
     * // Create many Geodata
     * const geodata = await prisma.geodata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeodataCreateManyArgs>(args?: SelectSubset<T, GeodataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Geodata and returns the data saved in the database.
     * @param {GeodataCreateManyAndReturnArgs} args - Arguments to create many Geodata.
     * @example
     * // Create many Geodata
     * const geodata = await prisma.geodata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Geodata and only return the `id`
     * const geodataWithIdOnly = await prisma.geodata.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeodataCreateManyAndReturnArgs>(args?: SelectSubset<T, GeodataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Geodata.
     * @param {GeodataDeleteArgs} args - Arguments to delete one Geodata.
     * @example
     * // Delete one Geodata
     * const Geodata = await prisma.geodata.delete({
     *   where: {
     *     // ... filter to delete one Geodata
     *   }
     * })
     * 
     */
    delete<T extends GeodataDeleteArgs>(args: SelectSubset<T, GeodataDeleteArgs<ExtArgs>>): Prisma__GeodataClient<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Geodata.
     * @param {GeodataUpdateArgs} args - Arguments to update one Geodata.
     * @example
     * // Update one Geodata
     * const geodata = await prisma.geodata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeodataUpdateArgs>(args: SelectSubset<T, GeodataUpdateArgs<ExtArgs>>): Prisma__GeodataClient<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Geodata.
     * @param {GeodataDeleteManyArgs} args - Arguments to filter Geodata to delete.
     * @example
     * // Delete a few Geodata
     * const { count } = await prisma.geodata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeodataDeleteManyArgs>(args?: SelectSubset<T, GeodataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Geodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeodataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Geodata
     * const geodata = await prisma.geodata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeodataUpdateManyArgs>(args: SelectSubset<T, GeodataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Geodata.
     * @param {GeodataUpsertArgs} args - Arguments to update or create a Geodata.
     * @example
     * // Update or create a Geodata
     * const geodata = await prisma.geodata.upsert({
     *   create: {
     *     // ... data to create a Geodata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Geodata we want to update
     *   }
     * })
     */
    upsert<T extends GeodataUpsertArgs>(args: SelectSubset<T, GeodataUpsertArgs<ExtArgs>>): Prisma__GeodataClient<$Result.GetResult<Prisma.$GeodataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Geodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeodataCountArgs} args - Arguments to filter Geodata to count.
     * @example
     * // Count the number of Geodata
     * const count = await prisma.geodata.count({
     *   where: {
     *     // ... the filter for the Geodata we want to count
     *   }
     * })
    **/
    count<T extends GeodataCountArgs>(
      args?: Subset<T, GeodataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeodataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Geodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeodataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeodataAggregateArgs>(args: Subset<T, GeodataAggregateArgs>): Prisma.PrismaPromise<GetGeodataAggregateType<T>>

    /**
     * Group by Geodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeodataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeodataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeodataGroupByArgs['orderBy'] }
        : { orderBy?: GeodataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeodataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeodataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Geodata model
   */
  readonly fields: GeodataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Geodata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeodataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Geodata model
   */ 
  interface GeodataFieldRefs {
    readonly id: FieldRef<"Geodata", 'String'>
    readonly authorId: FieldRef<"Geodata", 'String'>
    readonly latitude: FieldRef<"Geodata", 'Float'>
    readonly longitude: FieldRef<"Geodata", 'Float'>
    readonly logdate: FieldRef<"Geodata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Geodata findUnique
   */
  export type GeodataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * Filter, which Geodata to fetch.
     */
    where: GeodataWhereUniqueInput
  }

  /**
   * Geodata findUniqueOrThrow
   */
  export type GeodataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * Filter, which Geodata to fetch.
     */
    where: GeodataWhereUniqueInput
  }

  /**
   * Geodata findFirst
   */
  export type GeodataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * Filter, which Geodata to fetch.
     */
    where?: GeodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geodata to fetch.
     */
    orderBy?: GeodataOrderByWithRelationInput | GeodataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Geodata.
     */
    cursor?: GeodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geodata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geodata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Geodata.
     */
    distinct?: GeodataScalarFieldEnum | GeodataScalarFieldEnum[]
  }

  /**
   * Geodata findFirstOrThrow
   */
  export type GeodataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * Filter, which Geodata to fetch.
     */
    where?: GeodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geodata to fetch.
     */
    orderBy?: GeodataOrderByWithRelationInput | GeodataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Geodata.
     */
    cursor?: GeodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geodata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geodata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Geodata.
     */
    distinct?: GeodataScalarFieldEnum | GeodataScalarFieldEnum[]
  }

  /**
   * Geodata findMany
   */
  export type GeodataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * Filter, which Geodata to fetch.
     */
    where?: GeodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geodata to fetch.
     */
    orderBy?: GeodataOrderByWithRelationInput | GeodataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Geodata.
     */
    cursor?: GeodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geodata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geodata.
     */
    skip?: number
    distinct?: GeodataScalarFieldEnum | GeodataScalarFieldEnum[]
  }

  /**
   * Geodata create
   */
  export type GeodataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * The data needed to create a Geodata.
     */
    data: XOR<GeodataCreateInput, GeodataUncheckedCreateInput>
  }

  /**
   * Geodata createMany
   */
  export type GeodataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Geodata.
     */
    data: GeodataCreateManyInput | GeodataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Geodata createManyAndReturn
   */
  export type GeodataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Geodata.
     */
    data: GeodataCreateManyInput | GeodataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Geodata update
   */
  export type GeodataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * The data needed to update a Geodata.
     */
    data: XOR<GeodataUpdateInput, GeodataUncheckedUpdateInput>
    /**
     * Choose, which Geodata to update.
     */
    where: GeodataWhereUniqueInput
  }

  /**
   * Geodata updateMany
   */
  export type GeodataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Geodata.
     */
    data: XOR<GeodataUpdateManyMutationInput, GeodataUncheckedUpdateManyInput>
    /**
     * Filter which Geodata to update
     */
    where?: GeodataWhereInput
  }

  /**
   * Geodata upsert
   */
  export type GeodataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * The filter to search for the Geodata to update in case it exists.
     */
    where: GeodataWhereUniqueInput
    /**
     * In case the Geodata found by the `where` argument doesn't exist, create a new Geodata with this data.
     */
    create: XOR<GeodataCreateInput, GeodataUncheckedCreateInput>
    /**
     * In case the Geodata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeodataUpdateInput, GeodataUncheckedUpdateInput>
  }

  /**
   * Geodata delete
   */
  export type GeodataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
    /**
     * Filter which Geodata to delete.
     */
    where: GeodataWhereUniqueInput
  }

  /**
   * Geodata deleteMany
   */
  export type GeodataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Geodata to delete
     */
    where?: GeodataWhereInput
  }

  /**
   * Geodata without action
   */
  export type GeodataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geodata
     */
    select?: GeodataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeodataInclude<ExtArgs> | null
  }


  /**
   * Model PlaceData
   */

  export type AggregatePlaceData = {
    _count: PlaceDataCountAggregateOutputType | null
    _avg: PlaceDataAvgAggregateOutputType | null
    _sum: PlaceDataSumAggregateOutputType | null
    _min: PlaceDataMinAggregateOutputType | null
    _max: PlaceDataMaxAggregateOutputType | null
  }

  export type PlaceDataAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PlaceDataSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PlaceDataMinAggregateOutputType = {
    id: string | null
    owner: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
  }

  export type PlaceDataMaxAggregateOutputType = {
    id: string | null
    owner: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
  }

  export type PlaceDataCountAggregateOutputType = {
    id: number
    owner: number
    name: number
    latitude: number
    longitude: number
    description: number
    _all: number
  }


  export type PlaceDataAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PlaceDataSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PlaceDataMinAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    latitude?: true
    longitude?: true
    description?: true
  }

  export type PlaceDataMaxAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    latitude?: true
    longitude?: true
    description?: true
  }

  export type PlaceDataCountAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    latitude?: true
    longitude?: true
    description?: true
    _all?: true
  }

  export type PlaceDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaceData to aggregate.
     */
    where?: PlaceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceData to fetch.
     */
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaceData
    **/
    _count?: true | PlaceDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaceDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaceDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceDataMaxAggregateInputType
  }

  export type GetPlaceDataAggregateType<T extends PlaceDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaceData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaceData[P]>
      : GetScalarType<T[P], AggregatePlaceData[P]>
  }




  export type PlaceDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceDataWhereInput
    orderBy?: PlaceDataOrderByWithAggregationInput | PlaceDataOrderByWithAggregationInput[]
    by: PlaceDataScalarFieldEnum[] | PlaceDataScalarFieldEnum
    having?: PlaceDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceDataCountAggregateInputType | true
    _avg?: PlaceDataAvgAggregateInputType
    _sum?: PlaceDataSumAggregateInputType
    _min?: PlaceDataMinAggregateInputType
    _max?: PlaceDataMaxAggregateInputType
  }

  export type PlaceDataGroupByOutputType = {
    id: string
    owner: string
    name: string
    latitude: number
    longitude: number
    description: string
    _count: PlaceDataCountAggregateOutputType | null
    _avg: PlaceDataAvgAggregateOutputType | null
    _sum: PlaceDataSumAggregateOutputType | null
    _min: PlaceDataMinAggregateOutputType | null
    _max: PlaceDataMaxAggregateOutputType | null
  }

  type GetPlaceDataGroupByPayload<T extends PlaceDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceDataGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceDataGroupByOutputType[P]>
        }
      >
    >


  export type PlaceDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
  }, ExtArgs["result"]["placeData"]>

  export type PlaceDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
  }, ExtArgs["result"]["placeData"]>

  export type PlaceDataSelectScalar = {
    id?: boolean
    owner?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
  }


  export type $PlaceDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaceData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner: string
      name: string
      latitude: number
      longitude: number
      description: string
    }, ExtArgs["result"]["placeData"]>
    composites: {}
  }

  type PlaceDataGetPayload<S extends boolean | null | undefined | PlaceDataDefaultArgs> = $Result.GetResult<Prisma.$PlaceDataPayload, S>

  type PlaceDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaceDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaceDataCountAggregateInputType | true
    }

  export interface PlaceDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaceData'], meta: { name: 'PlaceData' } }
    /**
     * Find zero or one PlaceData that matches the filter.
     * @param {PlaceDataFindUniqueArgs} args - Arguments to find a PlaceData
     * @example
     * // Get one PlaceData
     * const placeData = await prisma.placeData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceDataFindUniqueArgs>(args: SelectSubset<T, PlaceDataFindUniqueArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlaceData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlaceDataFindUniqueOrThrowArgs} args - Arguments to find a PlaceData
     * @example
     * // Get one PlaceData
     * const placeData = await prisma.placeData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlaceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataFindFirstArgs} args - Arguments to find a PlaceData
     * @example
     * // Get one PlaceData
     * const placeData = await prisma.placeData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceDataFindFirstArgs>(args?: SelectSubset<T, PlaceDataFindFirstArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlaceData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataFindFirstOrThrowArgs} args - Arguments to find a PlaceData
     * @example
     * // Get one PlaceData
     * const placeData = await prisma.placeData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlaceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaceData
     * const placeData = await prisma.placeData.findMany()
     * 
     * // Get first 10 PlaceData
     * const placeData = await prisma.placeData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeDataWithIdOnly = await prisma.placeData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceDataFindManyArgs>(args?: SelectSubset<T, PlaceDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlaceData.
     * @param {PlaceDataCreateArgs} args - Arguments to create a PlaceData.
     * @example
     * // Create one PlaceData
     * const PlaceData = await prisma.placeData.create({
     *   data: {
     *     // ... data to create a PlaceData
     *   }
     * })
     * 
     */
    create<T extends PlaceDataCreateArgs>(args: SelectSubset<T, PlaceDataCreateArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlaceData.
     * @param {PlaceDataCreateManyArgs} args - Arguments to create many PlaceData.
     * @example
     * // Create many PlaceData
     * const placeData = await prisma.placeData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceDataCreateManyArgs>(args?: SelectSubset<T, PlaceDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaceData and returns the data saved in the database.
     * @param {PlaceDataCreateManyAndReturnArgs} args - Arguments to create many PlaceData.
     * @example
     * // Create many PlaceData
     * const placeData = await prisma.placeData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaceData and only return the `id`
     * const placeDataWithIdOnly = await prisma.placeData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaceDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaceDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlaceData.
     * @param {PlaceDataDeleteArgs} args - Arguments to delete one PlaceData.
     * @example
     * // Delete one PlaceData
     * const PlaceData = await prisma.placeData.delete({
     *   where: {
     *     // ... filter to delete one PlaceData
     *   }
     * })
     * 
     */
    delete<T extends PlaceDataDeleteArgs>(args: SelectSubset<T, PlaceDataDeleteArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlaceData.
     * @param {PlaceDataUpdateArgs} args - Arguments to update one PlaceData.
     * @example
     * // Update one PlaceData
     * const placeData = await prisma.placeData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceDataUpdateArgs>(args: SelectSubset<T, PlaceDataUpdateArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlaceData.
     * @param {PlaceDataDeleteManyArgs} args - Arguments to filter PlaceData to delete.
     * @example
     * // Delete a few PlaceData
     * const { count } = await prisma.placeData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDataDeleteManyArgs>(args?: SelectSubset<T, PlaceDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaceData
     * const placeData = await prisma.placeData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceDataUpdateManyArgs>(args: SelectSubset<T, PlaceDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlaceData.
     * @param {PlaceDataUpsertArgs} args - Arguments to update or create a PlaceData.
     * @example
     * // Update or create a PlaceData
     * const placeData = await prisma.placeData.upsert({
     *   create: {
     *     // ... data to create a PlaceData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaceData we want to update
     *   }
     * })
     */
    upsert<T extends PlaceDataUpsertArgs>(args: SelectSubset<T, PlaceDataUpsertArgs<ExtArgs>>): Prisma__PlaceDataClient<$Result.GetResult<Prisma.$PlaceDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlaceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataCountArgs} args - Arguments to filter PlaceData to count.
     * @example
     * // Count the number of PlaceData
     * const count = await prisma.placeData.count({
     *   where: {
     *     // ... the filter for the PlaceData we want to count
     *   }
     * })
    **/
    count<T extends PlaceDataCountArgs>(
      args?: Subset<T, PlaceDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaceDataAggregateArgs>(args: Subset<T, PlaceDataAggregateArgs>): Prisma.PrismaPromise<GetPlaceDataAggregateType<T>>

    /**
     * Group by PlaceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaceDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceDataGroupByArgs['orderBy'] }
        : { orderBy?: PlaceDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaceDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaceData model
   */
  readonly fields: PlaceDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaceData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaceData model
   */ 
  interface PlaceDataFieldRefs {
    readonly id: FieldRef<"PlaceData", 'String'>
    readonly owner: FieldRef<"PlaceData", 'String'>
    readonly name: FieldRef<"PlaceData", 'String'>
    readonly latitude: FieldRef<"PlaceData", 'Float'>
    readonly longitude: FieldRef<"PlaceData", 'Float'>
    readonly description: FieldRef<"PlaceData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlaceData findUnique
   */
  export type PlaceDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where: PlaceDataWhereUniqueInput
  }

  /**
   * PlaceData findUniqueOrThrow
   */
  export type PlaceDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where: PlaceDataWhereUniqueInput
  }

  /**
   * PlaceData findFirst
   */
  export type PlaceDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where?: PlaceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceData to fetch.
     */
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaceData.
     */
    cursor?: PlaceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaceData.
     */
    distinct?: PlaceDataScalarFieldEnum | PlaceDataScalarFieldEnum[]
  }

  /**
   * PlaceData findFirstOrThrow
   */
  export type PlaceDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where?: PlaceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceData to fetch.
     */
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaceData.
     */
    cursor?: PlaceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaceData.
     */
    distinct?: PlaceDataScalarFieldEnum | PlaceDataScalarFieldEnum[]
  }

  /**
   * PlaceData findMany
   */
  export type PlaceDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Filter, which PlaceData to fetch.
     */
    where?: PlaceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceData to fetch.
     */
    orderBy?: PlaceDataOrderByWithRelationInput | PlaceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaceData.
     */
    cursor?: PlaceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceData.
     */
    skip?: number
    distinct?: PlaceDataScalarFieldEnum | PlaceDataScalarFieldEnum[]
  }

  /**
   * PlaceData create
   */
  export type PlaceDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * The data needed to create a PlaceData.
     */
    data: XOR<PlaceDataCreateInput, PlaceDataUncheckedCreateInput>
  }

  /**
   * PlaceData createMany
   */
  export type PlaceDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaceData.
     */
    data: PlaceDataCreateManyInput | PlaceDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaceData createManyAndReturn
   */
  export type PlaceDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlaceData.
     */
    data: PlaceDataCreateManyInput | PlaceDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaceData update
   */
  export type PlaceDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * The data needed to update a PlaceData.
     */
    data: XOR<PlaceDataUpdateInput, PlaceDataUncheckedUpdateInput>
    /**
     * Choose, which PlaceData to update.
     */
    where: PlaceDataWhereUniqueInput
  }

  /**
   * PlaceData updateMany
   */
  export type PlaceDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaceData.
     */
    data: XOR<PlaceDataUpdateManyMutationInput, PlaceDataUncheckedUpdateManyInput>
    /**
     * Filter which PlaceData to update
     */
    where?: PlaceDataWhereInput
  }

  /**
   * PlaceData upsert
   */
  export type PlaceDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * The filter to search for the PlaceData to update in case it exists.
     */
    where: PlaceDataWhereUniqueInput
    /**
     * In case the PlaceData found by the `where` argument doesn't exist, create a new PlaceData with this data.
     */
    create: XOR<PlaceDataCreateInput, PlaceDataUncheckedCreateInput>
    /**
     * In case the PlaceData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceDataUpdateInput, PlaceDataUncheckedUpdateInput>
  }

  /**
   * PlaceData delete
   */
  export type PlaceDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
    /**
     * Filter which PlaceData to delete.
     */
    where: PlaceDataWhereUniqueInput
  }

  /**
   * PlaceData deleteMany
   */
  export type PlaceDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaceData to delete
     */
    where?: PlaceDataWhereInput
  }

  /**
   * PlaceData without action
   */
  export type PlaceDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceData
     */
    select?: PlaceDataSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    accountid: 'accountid',
    userid: 'userid',
    email: 'email',
    age: 'age',
    accountname: 'accountname',
    icon: 'icon'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const GeodataScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    latitude: 'latitude',
    longitude: 'longitude',
    logdate: 'logdate'
  };

  export type GeodataScalarFieldEnum = (typeof GeodataScalarFieldEnum)[keyof typeof GeodataScalarFieldEnum]


  export const PlaceDataScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    description: 'description'
  };

  export type PlaceDataScalarFieldEnum = (typeof PlaceDataScalarFieldEnum)[keyof typeof PlaceDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountid?: StringFilter<"Account"> | string
    userid?: StringNullableFilter<"Account"> | string | null
    email?: StringFilter<"Account"> | string
    age?: IntNullableFilter<"Account"> | number | null
    accountname?: StringNullableFilter<"Account"> | string | null
    icon?: StringNullableFilter<"Account"> | string | null
    Geodata?: GeodataListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    accountid?: SortOrder
    userid?: SortOrderInput | SortOrder
    email?: SortOrder
    age?: SortOrderInput | SortOrder
    accountname?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    Geodata?: GeodataOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    accountid?: string
    userid?: string
    email?: string
    accountname?: string
    icon?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    age?: IntNullableFilter<"Account"> | number | null
    Geodata?: GeodataListRelationFilter
  }, "accountid" | "accountid" | "userid" | "email" | "accountname" | "icon">

  export type AccountOrderByWithAggregationInput = {
    accountid?: SortOrder
    userid?: SortOrderInput | SortOrder
    email?: SortOrder
    age?: SortOrderInput | SortOrder
    accountname?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    accountid?: StringWithAggregatesFilter<"Account"> | string
    userid?: StringNullableWithAggregatesFilter<"Account"> | string | null
    email?: StringWithAggregatesFilter<"Account"> | string
    age?: IntNullableWithAggregatesFilter<"Account"> | number | null
    accountname?: StringNullableWithAggregatesFilter<"Account"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type GeodataWhereInput = {
    AND?: GeodataWhereInput | GeodataWhereInput[]
    OR?: GeodataWhereInput[]
    NOT?: GeodataWhereInput | GeodataWhereInput[]
    id?: StringFilter<"Geodata"> | string
    authorId?: StringFilter<"Geodata"> | string
    latitude?: FloatFilter<"Geodata"> | number
    longitude?: FloatFilter<"Geodata"> | number
    logdate?: DateTimeFilter<"Geodata"> | Date | string
    Account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type GeodataOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logdate?: SortOrder
    Account?: AccountOrderByWithRelationInput
  }

  export type GeodataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeodataWhereInput | GeodataWhereInput[]
    OR?: GeodataWhereInput[]
    NOT?: GeodataWhereInput | GeodataWhereInput[]
    authorId?: StringFilter<"Geodata"> | string
    latitude?: FloatFilter<"Geodata"> | number
    longitude?: FloatFilter<"Geodata"> | number
    logdate?: DateTimeFilter<"Geodata"> | Date | string
    Account?: XOR<AccountRelationFilter, AccountWhereInput>
  }, "id">

  export type GeodataOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logdate?: SortOrder
    _count?: GeodataCountOrderByAggregateInput
    _avg?: GeodataAvgOrderByAggregateInput
    _max?: GeodataMaxOrderByAggregateInput
    _min?: GeodataMinOrderByAggregateInput
    _sum?: GeodataSumOrderByAggregateInput
  }

  export type GeodataScalarWhereWithAggregatesInput = {
    AND?: GeodataScalarWhereWithAggregatesInput | GeodataScalarWhereWithAggregatesInput[]
    OR?: GeodataScalarWhereWithAggregatesInput[]
    NOT?: GeodataScalarWhereWithAggregatesInput | GeodataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Geodata"> | string
    authorId?: StringWithAggregatesFilter<"Geodata"> | string
    latitude?: FloatWithAggregatesFilter<"Geodata"> | number
    longitude?: FloatWithAggregatesFilter<"Geodata"> | number
    logdate?: DateTimeWithAggregatesFilter<"Geodata"> | Date | string
  }

  export type PlaceDataWhereInput = {
    AND?: PlaceDataWhereInput | PlaceDataWhereInput[]
    OR?: PlaceDataWhereInput[]
    NOT?: PlaceDataWhereInput | PlaceDataWhereInput[]
    id?: StringFilter<"PlaceData"> | string
    owner?: StringFilter<"PlaceData"> | string
    name?: StringFilter<"PlaceData"> | string
    latitude?: FloatFilter<"PlaceData"> | number
    longitude?: FloatFilter<"PlaceData"> | number
    description?: StringFilter<"PlaceData"> | string
  }

  export type PlaceDataOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type PlaceDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PlaceDataWhereInput | PlaceDataWhereInput[]
    OR?: PlaceDataWhereInput[]
    NOT?: PlaceDataWhereInput | PlaceDataWhereInput[]
    owner?: StringFilter<"PlaceData"> | string
    latitude?: FloatFilter<"PlaceData"> | number
    longitude?: FloatFilter<"PlaceData"> | number
    description?: StringFilter<"PlaceData"> | string
  }, "id" | "id" | "name">

  export type PlaceDataOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    _count?: PlaceDataCountOrderByAggregateInput
    _avg?: PlaceDataAvgOrderByAggregateInput
    _max?: PlaceDataMaxOrderByAggregateInput
    _min?: PlaceDataMinOrderByAggregateInput
    _sum?: PlaceDataSumOrderByAggregateInput
  }

  export type PlaceDataScalarWhereWithAggregatesInput = {
    AND?: PlaceDataScalarWhereWithAggregatesInput | PlaceDataScalarWhereWithAggregatesInput[]
    OR?: PlaceDataScalarWhereWithAggregatesInput[]
    NOT?: PlaceDataScalarWhereWithAggregatesInput | PlaceDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaceData"> | string
    owner?: StringWithAggregatesFilter<"PlaceData"> | string
    name?: StringWithAggregatesFilter<"PlaceData"> | string
    latitude?: FloatWithAggregatesFilter<"PlaceData"> | number
    longitude?: FloatWithAggregatesFilter<"PlaceData"> | number
    description?: StringWithAggregatesFilter<"PlaceData"> | string
  }

  export type AccountCreateInput = {
    accountid: string
    userid?: string | null
    email: string
    age?: number | null
    accountname?: string | null
    icon?: string | null
    Geodata?: GeodataCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    accountid: string
    userid?: string | null
    email: string
    age?: number | null
    accountname?: string | null
    icon?: string | null
    Geodata?: GeodataUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    accountid?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    accountname?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    Geodata?: GeodataUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    accountid?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    accountname?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    Geodata?: GeodataUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    accountid: string
    userid?: string | null
    email: string
    age?: number | null
    accountname?: string | null
    icon?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    accountid?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    accountname?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    accountid?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    accountname?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeodataCreateInput = {
    id: string
    latitude: number
    longitude: number
    logdate?: Date | string
    Account: AccountCreateNestedOneWithoutGeodataInput
  }

  export type GeodataUncheckedCreateInput = {
    id: string
    authorId: string
    latitude: number
    longitude: number
    logdate?: Date | string
  }

  export type GeodataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logdate?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateOneRequiredWithoutGeodataNestedInput
  }

  export type GeodataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeodataCreateManyInput = {
    id: string
    authorId: string
    latitude: number
    longitude: number
    logdate?: Date | string
  }

  export type GeodataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeodataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceDataCreateInput = {
    id: string
    owner: string
    name: string
    latitude: number
    longitude: number
    description: string
  }

  export type PlaceDataUncheckedCreateInput = {
    id: string
    owner: string
    name: string
    latitude: number
    longitude: number
    description: string
  }

  export type PlaceDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceDataCreateManyInput = {
    id: string
    owner: string
    name: string
    latitude: number
    longitude: number
    description: string
  }

  export type PlaceDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GeodataListRelationFilter = {
    every?: GeodataWhereInput
    some?: GeodataWhereInput
    none?: GeodataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GeodataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    accountid?: SortOrder
    userid?: SortOrder
    email?: SortOrder
    age?: SortOrder
    accountname?: SortOrder
    icon?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    accountid?: SortOrder
    userid?: SortOrder
    email?: SortOrder
    age?: SortOrder
    accountname?: SortOrder
    icon?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    accountid?: SortOrder
    userid?: SortOrder
    email?: SortOrder
    age?: SortOrder
    accountname?: SortOrder
    icon?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type GeodataCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logdate?: SortOrder
  }

  export type GeodataAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GeodataMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logdate?: SortOrder
  }

  export type GeodataMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logdate?: SortOrder
  }

  export type GeodataSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlaceDataCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type PlaceDataAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PlaceDataMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type PlaceDataMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type PlaceDataSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GeodataCreateNestedManyWithoutAccountInput = {
    create?: XOR<GeodataCreateWithoutAccountInput, GeodataUncheckedCreateWithoutAccountInput> | GeodataCreateWithoutAccountInput[] | GeodataUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: GeodataCreateOrConnectWithoutAccountInput | GeodataCreateOrConnectWithoutAccountInput[]
    createMany?: GeodataCreateManyAccountInputEnvelope
    connect?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
  }

  export type GeodataUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<GeodataCreateWithoutAccountInput, GeodataUncheckedCreateWithoutAccountInput> | GeodataCreateWithoutAccountInput[] | GeodataUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: GeodataCreateOrConnectWithoutAccountInput | GeodataCreateOrConnectWithoutAccountInput[]
    createMany?: GeodataCreateManyAccountInputEnvelope
    connect?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GeodataUpdateManyWithoutAccountNestedInput = {
    create?: XOR<GeodataCreateWithoutAccountInput, GeodataUncheckedCreateWithoutAccountInput> | GeodataCreateWithoutAccountInput[] | GeodataUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: GeodataCreateOrConnectWithoutAccountInput | GeodataCreateOrConnectWithoutAccountInput[]
    upsert?: GeodataUpsertWithWhereUniqueWithoutAccountInput | GeodataUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: GeodataCreateManyAccountInputEnvelope
    set?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
    disconnect?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
    delete?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
    connect?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
    update?: GeodataUpdateWithWhereUniqueWithoutAccountInput | GeodataUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: GeodataUpdateManyWithWhereWithoutAccountInput | GeodataUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: GeodataScalarWhereInput | GeodataScalarWhereInput[]
  }

  export type GeodataUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<GeodataCreateWithoutAccountInput, GeodataUncheckedCreateWithoutAccountInput> | GeodataCreateWithoutAccountInput[] | GeodataUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: GeodataCreateOrConnectWithoutAccountInput | GeodataCreateOrConnectWithoutAccountInput[]
    upsert?: GeodataUpsertWithWhereUniqueWithoutAccountInput | GeodataUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: GeodataCreateManyAccountInputEnvelope
    set?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
    disconnect?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
    delete?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
    connect?: GeodataWhereUniqueInput | GeodataWhereUniqueInput[]
    update?: GeodataUpdateWithWhereUniqueWithoutAccountInput | GeodataUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: GeodataUpdateManyWithWhereWithoutAccountInput | GeodataUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: GeodataScalarWhereInput | GeodataScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutGeodataInput = {
    create?: XOR<AccountCreateWithoutGeodataInput, AccountUncheckedCreateWithoutGeodataInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGeodataInput
    connect?: AccountWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateOneRequiredWithoutGeodataNestedInput = {
    create?: XOR<AccountCreateWithoutGeodataInput, AccountUncheckedCreateWithoutGeodataInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGeodataInput
    upsert?: AccountUpsertWithoutGeodataInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutGeodataInput, AccountUpdateWithoutGeodataInput>, AccountUncheckedUpdateWithoutGeodataInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GeodataCreateWithoutAccountInput = {
    id: string
    latitude: number
    longitude: number
    logdate?: Date | string
  }

  export type GeodataUncheckedCreateWithoutAccountInput = {
    id: string
    latitude: number
    longitude: number
    logdate?: Date | string
  }

  export type GeodataCreateOrConnectWithoutAccountInput = {
    where: GeodataWhereUniqueInput
    create: XOR<GeodataCreateWithoutAccountInput, GeodataUncheckedCreateWithoutAccountInput>
  }

  export type GeodataCreateManyAccountInputEnvelope = {
    data: GeodataCreateManyAccountInput | GeodataCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type GeodataUpsertWithWhereUniqueWithoutAccountInput = {
    where: GeodataWhereUniqueInput
    update: XOR<GeodataUpdateWithoutAccountInput, GeodataUncheckedUpdateWithoutAccountInput>
    create: XOR<GeodataCreateWithoutAccountInput, GeodataUncheckedCreateWithoutAccountInput>
  }

  export type GeodataUpdateWithWhereUniqueWithoutAccountInput = {
    where: GeodataWhereUniqueInput
    data: XOR<GeodataUpdateWithoutAccountInput, GeodataUncheckedUpdateWithoutAccountInput>
  }

  export type GeodataUpdateManyWithWhereWithoutAccountInput = {
    where: GeodataScalarWhereInput
    data: XOR<GeodataUpdateManyMutationInput, GeodataUncheckedUpdateManyWithoutAccountInput>
  }

  export type GeodataScalarWhereInput = {
    AND?: GeodataScalarWhereInput | GeodataScalarWhereInput[]
    OR?: GeodataScalarWhereInput[]
    NOT?: GeodataScalarWhereInput | GeodataScalarWhereInput[]
    id?: StringFilter<"Geodata"> | string
    authorId?: StringFilter<"Geodata"> | string
    latitude?: FloatFilter<"Geodata"> | number
    longitude?: FloatFilter<"Geodata"> | number
    logdate?: DateTimeFilter<"Geodata"> | Date | string
  }

  export type AccountCreateWithoutGeodataInput = {
    accountid: string
    userid?: string | null
    email: string
    age?: number | null
    accountname?: string | null
    icon?: string | null
  }

  export type AccountUncheckedCreateWithoutGeodataInput = {
    accountid: string
    userid?: string | null
    email: string
    age?: number | null
    accountname?: string | null
    icon?: string | null
  }

  export type AccountCreateOrConnectWithoutGeodataInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutGeodataInput, AccountUncheckedCreateWithoutGeodataInput>
  }

  export type AccountUpsertWithoutGeodataInput = {
    update: XOR<AccountUpdateWithoutGeodataInput, AccountUncheckedUpdateWithoutGeodataInput>
    create: XOR<AccountCreateWithoutGeodataInput, AccountUncheckedCreateWithoutGeodataInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutGeodataInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutGeodataInput, AccountUncheckedUpdateWithoutGeodataInput>
  }

  export type AccountUpdateWithoutGeodataInput = {
    accountid?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    accountname?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutGeodataInput = {
    accountid?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    accountname?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeodataCreateManyAccountInput = {
    id: string
    latitude: number
    longitude: number
    logdate?: Date | string
  }

  export type GeodataUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeodataUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeodataUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GeodataDefaultArgs instead
     */
    export type GeodataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GeodataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaceDataDefaultArgs instead
     */
    export type PlaceDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaceDataDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}