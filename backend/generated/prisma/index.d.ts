
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Collaborator
 * 
 */
export type Collaborator = $Result.DefaultSelection<Prisma.$CollaboratorPayload>
/**
 * Model Todo
 * 
 */
export type Todo = $Result.DefaultSelection<Prisma.$TodoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER',
  OWNER: 'OWNER',
  EDITOR: 'EDITOR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more People
 * const people = await prisma.person.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more People
   * const people = await prisma.person.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaborator`: Exposes CRUD operations for the **Collaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborators
    * const collaborators = await prisma.collaborator.findMany()
    * ```
    */
  get collaborator(): Prisma.CollaboratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Person: 'Person',
    User: 'User',
    Project: 'Project',
    Collaborator: 'Collaborator',
    Todo: 'Todo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "person" | "user" | "project" | "collaborator" | "todo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Collaborator: {
        payload: Prisma.$CollaboratorPayload<ExtArgs>
        fields: Prisma.CollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findFirst: {
            args: Prisma.CollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findMany: {
            args: Prisma.CollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          create: {
            args: Prisma.CollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          createMany: {
            args: Prisma.CollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          delete: {
            args: Prisma.CollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          update: {
            args: Prisma.CollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.CollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.CollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          aggregate: {
            args: Prisma.CollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaborator>
          }
          groupBy: {
            args: Prisma.CollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorCountAggregateOutputType> | number
          }
        }
      }
      Todo: {
        payload: Prisma.$TodoPayload<ExtArgs>
        fields: Prisma.TodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findFirst: {
            args: Prisma.TodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findMany: {
            args: Prisma.TodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          create: {
            args: Prisma.TodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          createMany: {
            args: Prisma.TodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          delete: {
            args: Prisma.TodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          update: {
            args: Prisma.TodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          deleteMany: {
            args: Prisma.TodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          upsert: {
            args: Prisma.TodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          aggregate: {
            args: Prisma.TodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodo>
          }
          groupBy: {
            args: Prisma.TodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoCountArgs<ExtArgs>
            result: $Utils.Optional<TodoCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    person?: PersonOmit
    user?: UserOmit
    project?: ProjectOmit
    collaborator?: CollaboratorOmit
    todo?: TodoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    todos: number
    collaborations: number
    ownedProjects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | UserCountOutputTypeCountTodosArgs
    collaborations?: boolean | UserCountOutputTypeCountCollaborationsArgs
    ownedProjects?: boolean | UserCountOutputTypeCountOwnedProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    todos: number
    collaborators: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | ProjectCountOutputTypeCountTodosArgs
    collaborators?: boolean | ProjectCountOutputTypeCountCollaboratorsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    dob: Date | null
    gender: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    dob: Date | null
    gender: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    dob: number
    gender: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    dob?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    dob?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    dob?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    firstname: string
    lastname: string | null
    dob: Date
    gender: string
    createdAt: Date
    updatedAt: Date | null
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    dob?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Person$userArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    dob?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    dob?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    dob?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "dob" | "gender" | "createdAt" | "updatedAt", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Person$userArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string | null
      dob: Date
      gender: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Person$userArgs<ExtArgs> = {}>(args?: Subset<T, Person$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly firstname: FieldRef<"Person", 'String'>
    readonly lastname: FieldRef<"Person", 'String'>
    readonly dob: FieldRef<"Person", 'DateTime'>
    readonly gender: FieldRef<"Person", 'String'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.user
   */
  export type Person$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    refreshToken: string | null
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
    isUserVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    personId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    refreshToken: string | null
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
    isUserVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    personId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    refreshToken: number
    passwordResetToken: number
    passwordResetExpiry: number
    isUserVerified: number
    createdAt: number
    updatedAt: number
    personId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    refreshToken?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
    isUserVerified?: true
    createdAt?: true
    updatedAt?: true
    personId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    refreshToken?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
    isUserVerified?: true
    createdAt?: true
    updatedAt?: true
    personId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    refreshToken?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
    isUserVerified?: true
    createdAt?: true
    updatedAt?: true
    personId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    refreshToken: string | null
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
    isUserVerified: boolean
    createdAt: Date
    updatedAt: Date | null
    personId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    refreshToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    isUserVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personId?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    collaborations?: boolean | User$collaborationsArgs<ExtArgs>
    ownedProjects?: boolean | User$ownedProjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    refreshToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    isUserVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personId?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    refreshToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    isUserVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personId?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    refreshToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    isUserVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "refreshToken" | "passwordResetToken" | "passwordResetExpiry" | "isUserVerified" | "createdAt" | "updatedAt" | "personId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    collaborations?: boolean | User$collaborationsArgs<ExtArgs>
    ownedProjects?: boolean | User$ownedProjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      todos: Prisma.$TodoPayload<ExtArgs>[]
      collaborations: Prisma.$CollaboratorPayload<ExtArgs>[]
      ownedProjects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      refreshToken: string | null
      passwordResetToken: string | null
      passwordResetExpiry: Date | null
      isUserVerified: boolean
      createdAt: Date
      updatedAt: Date | null
      personId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    todos<T extends User$todosArgs<ExtArgs> = {}>(args?: Subset<T, User$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborations<T extends User$collaborationsArgs<ExtArgs> = {}>(args?: Subset<T, User$collaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedProjects<T extends User$ownedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetExpiry: FieldRef<"User", 'DateTime'>
    readonly isUserVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly personId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.todos
   */
  export type User$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * User.collaborations
   */
  export type User$collaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    cursor?: CollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * User.ownedProjects
   */
  export type User$ownedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date | null
    ownerId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    todos?: boolean | Project$todosArgs<ExtArgs>
    collaborators?: boolean | Project$collaboratorsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    todos?: boolean | Project$todosArgs<ExtArgs>
    collaborators?: boolean | Project$collaboratorsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      todos: Prisma.$TodoPayload<ExtArgs>[]
      collaborators: Prisma.$CollaboratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date | null
      ownerId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    todos<T extends Project$todosArgs<ExtArgs> = {}>(args?: Subset<T, Project$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Project$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Project$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly ownerId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.todos
   */
  export type Project$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Project.collaborators
   */
  export type Project$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    cursor?: CollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Collaborator
   */

  export type AggregateCollaborator = {
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  export type CollaboratorMinAggregateOutputType = {
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    projectId: string | null
  }

  export type CollaboratorMaxAggregateOutputType = {
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    projectId: string | null
  }

  export type CollaboratorCountAggregateOutputType = {
    role: number
    createdAt: number
    updatedAt: number
    userId: number
    projectId: number
    _all: number
  }


  export type CollaboratorMinAggregateInputType = {
    role?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
  }

  export type CollaboratorMaxAggregateInputType = {
    role?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
  }

  export type CollaboratorCountAggregateInputType = {
    role?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
    _all?: true
  }

  export type CollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborator to aggregate.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborators
    **/
    _count?: true | CollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaboratorMaxAggregateInputType
  }

  export type GetCollaboratorAggregateType<T extends CollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborator[P]>
      : GetScalarType<T[P], AggregateCollaborator[P]>
  }




  export type CollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithAggregationInput | CollaboratorOrderByWithAggregationInput[]
    by: CollaboratorScalarFieldEnum[] | CollaboratorScalarFieldEnum
    having?: CollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaboratorCountAggregateInputType | true
    _min?: CollaboratorMinAggregateInputType
    _max?: CollaboratorMaxAggregateInputType
  }

  export type CollaboratorGroupByOutputType = {
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date | null
    userId: string
    projectId: string
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  type GetCollaboratorGroupByPayload<T extends CollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type CollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectScalar = {
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
  }

  export type CollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role" | "createdAt" | "updatedAt" | "userId" | "projectId", ExtArgs["result"]["collaborator"]>
  export type CollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CollaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaborator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date | null
      userId: string
      projectId: string
    }, ExtArgs["result"]["collaborator"]>
    composites: {}
  }

  type CollaboratorGetPayload<S extends boolean | null | undefined | CollaboratorDefaultArgs> = $Result.GetResult<Prisma.$CollaboratorPayload, S>

  type CollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaboratorCountAggregateInputType | true
    }

  export interface CollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaborator'], meta: { name: 'Collaborator' } }
    /**
     * Find zero or one Collaborator that matches the filter.
     * @param {CollaboratorFindUniqueArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaboratorFindUniqueArgs>(args: SelectSubset<T, CollaboratorFindUniqueArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaboratorFindUniqueOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaboratorFindFirstArgs>(args?: SelectSubset<T, CollaboratorFindFirstArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborators
     * const collaborators = await prisma.collaborator.findMany()
     * 
     * // Get first 10 Collaborators
     * const collaborators = await prisma.collaborator.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const collaboratorWithCreatedAtOnly = await prisma.collaborator.findMany({ select: { createdAt: true } })
     * 
     */
    findMany<T extends CollaboratorFindManyArgs>(args?: SelectSubset<T, CollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collaborator.
     * @param {CollaboratorCreateArgs} args - Arguments to create a Collaborator.
     * @example
     * // Create one Collaborator
     * const Collaborator = await prisma.collaborator.create({
     *   data: {
     *     // ... data to create a Collaborator
     *   }
     * })
     * 
     */
    create<T extends CollaboratorCreateArgs>(args: SelectSubset<T, CollaboratorCreateArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collaborators.
     * @param {CollaboratorCreateManyArgs} args - Arguments to create many Collaborators.
     * @example
     * // Create many Collaborators
     * const collaborator = await prisma.collaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaboratorCreateManyArgs>(args?: SelectSubset<T, CollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collaborators and returns the data saved in the database.
     * @param {CollaboratorCreateManyAndReturnArgs} args - Arguments to create many Collaborators.
     * @example
     * // Create many Collaborators
     * const collaborator = await prisma.collaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collaborators and only return the `createdAt`
     * const collaboratorWithCreatedAtOnly = await prisma.collaborator.createManyAndReturn({
     *   select: { createdAt: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collaborator.
     * @param {CollaboratorDeleteArgs} args - Arguments to delete one Collaborator.
     * @example
     * // Delete one Collaborator
     * const Collaborator = await prisma.collaborator.delete({
     *   where: {
     *     // ... filter to delete one Collaborator
     *   }
     * })
     * 
     */
    delete<T extends CollaboratorDeleteArgs>(args: SelectSubset<T, CollaboratorDeleteArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collaborator.
     * @param {CollaboratorUpdateArgs} args - Arguments to update one Collaborator.
     * @example
     * // Update one Collaborator
     * const collaborator = await prisma.collaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaboratorUpdateArgs>(args: SelectSubset<T, CollaboratorUpdateArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collaborators.
     * @param {CollaboratorDeleteManyArgs} args - Arguments to filter Collaborators to delete.
     * @example
     * // Delete a few Collaborators
     * const { count } = await prisma.collaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaboratorDeleteManyArgs>(args?: SelectSubset<T, CollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaboratorUpdateManyArgs>(args: SelectSubset<T, CollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators and returns the data updated in the database.
     * @param {CollaboratorUpdateManyAndReturnArgs} args - Arguments to update many Collaborators.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collaborators and only return the `createdAt`
     * const collaboratorWithCreatedAtOnly = await prisma.collaborator.updateManyAndReturn({
     *   select: { createdAt: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collaborator.
     * @param {CollaboratorUpsertArgs} args - Arguments to update or create a Collaborator.
     * @example
     * // Update or create a Collaborator
     * const collaborator = await prisma.collaborator.upsert({
     *   create: {
     *     // ... data to create a Collaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaborator we want to update
     *   }
     * })
     */
    upsert<T extends CollaboratorUpsertArgs>(args: SelectSubset<T, CollaboratorUpsertArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorCountArgs} args - Arguments to filter Collaborators to count.
     * @example
     * // Count the number of Collaborators
     * const count = await prisma.collaborator.count({
     *   where: {
     *     // ... the filter for the Collaborators we want to count
     *   }
     * })
    **/
    count<T extends CollaboratorCountArgs>(
      args?: Subset<T, CollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollaboratorAggregateArgs>(args: Subset<T, CollaboratorAggregateArgs>): Prisma.PrismaPromise<GetCollaboratorAggregateType<T>>

    /**
     * Group by Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorGroupByArgs} args - Group by arguments.
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
      T extends CollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: CollaboratorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaborator model
   */
  readonly fields: CollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Collaborator model
   */
  interface CollaboratorFieldRefs {
    readonly role: FieldRef<"Collaborator", 'Role'>
    readonly createdAt: FieldRef<"Collaborator", 'DateTime'>
    readonly updatedAt: FieldRef<"Collaborator", 'DateTime'>
    readonly userId: FieldRef<"Collaborator", 'String'>
    readonly projectId: FieldRef<"Collaborator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Collaborator findUnique
   */
  export type CollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator findUniqueOrThrow
   */
  export type CollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator findFirst
   */
  export type CollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator findFirstOrThrow
   */
  export type CollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator findMany
   */
  export type CollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Collaborators to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator create
   */
  export type CollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a Collaborator.
     */
    data: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
  }

  /**
   * Collaborator createMany
   */
  export type CollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collaborator createManyAndReturn
   */
  export type CollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaborator update
   */
  export type CollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a Collaborator.
     */
    data: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
    /**
     * Choose, which Collaborator to update.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator updateMany
   */
  export type CollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to update.
     */
    limit?: number
  }

  /**
   * Collaborator updateManyAndReturn
   */
  export type CollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaborator upsert
   */
  export type CollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the Collaborator to update in case it exists.
     */
    where: CollaboratorWhereUniqueInput
    /**
     * In case the Collaborator found by the `where` argument doesn't exist, create a new Collaborator with this data.
     */
    create: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
    /**
     * In case the Collaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
  }

  /**
   * Collaborator delete
   */
  export type CollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
    /**
     * Filter which Collaborator to delete.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator deleteMany
   */
  export type CollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborators to delete
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to delete.
     */
    limit?: number
  }

  /**
   * Collaborator without action
   */
  export type CollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorInclude<ExtArgs> | null
  }


  /**
   * Model Todo
   */

  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    createdBy: string | null
  }

  export type TodoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    createdBy: string | null
  }

  export type TodoCountAggregateOutputType = {
    id: number
    title: number
    description: number
    deadline: number
    isCompleted: number
    createdAt: number
    updatedAt: number
    projectId: number
    createdBy: number
    _all: number
  }


  export type TodoMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    createdBy?: true
  }

  export type TodoMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    createdBy?: true
  }

  export type TodoCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    createdBy?: true
    _all?: true
  }

  export type TodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todo to aggregate.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithAggregationInput | TodoOrderByWithAggregationInput[]
    by: TodoScalarFieldEnum[] | TodoScalarFieldEnum
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }

  export type TodoGroupByOutputType = {
    id: string
    title: string
    description: string
    deadline: Date
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date | null
    projectId: string
    createdBy: string
    _count: TodoCountAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    createdBy?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    createdBy?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    createdBy?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    createdBy?: boolean
  }

  export type TodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "deadline" | "isCompleted" | "createdAt" | "updatedAt" | "projectId" | "createdBy", ExtArgs["result"]["todo"]>
  export type TodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Todo"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      deadline: Date
      isCompleted: boolean
      createdAt: Date
      updatedAt: Date | null
      projectId: string
      createdBy: string
    }, ExtArgs["result"]["todo"]>
    composites: {}
  }

  type TodoGetPayload<S extends boolean | null | undefined | TodoDefaultArgs> = $Result.GetResult<Prisma.$TodoPayload, S>

  type TodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodoCountAggregateInputType | true
    }

  export interface TodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Todo'], meta: { name: 'Todo' } }
    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoFindUniqueArgs>(args: SelectSubset<T, TodoFindUniqueArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Todo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoFindFirstArgs>(args?: SelectSubset<T, TodoFindFirstArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoWithIdOnly = await prisma.todo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodoFindManyArgs>(args?: SelectSubset<T, TodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
     */
    create<T extends TodoCreateArgs>(args: SelectSubset<T, TodoCreateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todos.
     * @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoCreateManyArgs>(args?: SelectSubset<T, TodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Todos and returns the data saved in the database.
     * @param {TodoCreateManyAndReturnArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Todos and only return the `id`
     * const todoWithIdOnly = await prisma.todo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodoCreateManyAndReturnArgs>(args?: SelectSubset<T, TodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
     */
    delete<T extends TodoDeleteArgs>(args: SelectSubset<T, TodoDeleteArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoUpdateArgs>(args: SelectSubset<T, TodoUpdateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoDeleteManyArgs>(args?: SelectSubset<T, TodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoUpdateManyArgs>(args: SelectSubset<T, TodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos and returns the data updated in the database.
     * @param {TodoUpdateManyAndReturnArgs} args - Arguments to update many Todos.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Todos and only return the `id`
     * const todoWithIdOnly = await prisma.todo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TodoUpdateManyAndReturnArgs>(args: SelectSubset<T, TodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
     */
    upsert<T extends TodoUpsertArgs>(args: SelectSubset<T, TodoUpsertArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
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
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Todo model
   */
  readonly fields: TodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Todo model
   */
  interface TodoFieldRefs {
    readonly id: FieldRef<"Todo", 'String'>
    readonly title: FieldRef<"Todo", 'String'>
    readonly description: FieldRef<"Todo", 'String'>
    readonly deadline: FieldRef<"Todo", 'DateTime'>
    readonly isCompleted: FieldRef<"Todo", 'Boolean'>
    readonly createdAt: FieldRef<"Todo", 'DateTime'>
    readonly updatedAt: FieldRef<"Todo", 'DateTime'>
    readonly projectId: FieldRef<"Todo", 'String'>
    readonly createdBy: FieldRef<"Todo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Todo findUnique
   */
  export type TodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findFirst
   */
  export type TodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findMany
   */
  export type TodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todos to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo create
   */
  export type TodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Todo.
     */
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }

  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Todo createManyAndReturn
   */
  export type TodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Todo update
   */
  export type TodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Todo.
     */
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to update.
     */
    limit?: number
  }

  /**
   * Todo updateManyAndReturn
   */
  export type TodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Todo upsert
   */
  export type TodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Todo to update in case it exists.
     */
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     */
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }

  /**
   * Todo delete
   */
  export type TodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter which Todo to delete.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todos to delete
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to delete.
     */
    limit?: number
  }

  /**
   * Todo without action
   */
  export type TodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
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


  export const PersonScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    dob: 'dob',
    gender: 'gender',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    refreshToken: 'refreshToken',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpiry: 'passwordResetExpiry',
    isUserVerified: 'isUserVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    personId: 'personId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const CollaboratorScalarFieldEnum: {
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    projectId: 'projectId'
  };

  export type CollaboratorScalarFieldEnum = (typeof CollaboratorScalarFieldEnum)[keyof typeof CollaboratorScalarFieldEnum]


  export const TodoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId',
    createdBy: 'createdBy'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    firstname?: StringFilter<"Person"> | string
    lastname?: StringNullableFilter<"Person"> | string | null
    dob?: DateTimeFilter<"Person"> | Date | string
    gender?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Person"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    dob?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    firstname?: StringFilter<"Person"> | string
    lastname?: StringNullableFilter<"Person"> | string | null
    dob?: DateTimeFilter<"Person"> | Date | string
    gender?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Person"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    dob?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    firstname?: StringWithAggregatesFilter<"Person"> | string
    lastname?: StringNullableWithAggregatesFilter<"Person"> | string | null
    dob?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    gender?: StringWithAggregatesFilter<"Person"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    isUserVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    personId?: StringFilter<"User"> | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    todos?: TodoListRelationFilter
    collaborations?: CollaboratorListRelationFilter
    ownedProjects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpiry?: SortOrderInput | SortOrder
    isUserVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    personId?: SortOrder
    person?: PersonOrderByWithRelationInput
    todos?: TodoOrderByRelationAggregateInput
    collaborations?: CollaboratorOrderByRelationAggregateInput
    ownedProjects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    personId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    isUserVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    todos?: TodoListRelationFilter
    collaborations?: CollaboratorListRelationFilter
    ownedProjects?: ProjectListRelationFilter
  }, "id" | "email" | "username" | "personId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpiry?: SortOrderInput | SortOrder
    isUserVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    personId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isUserVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    personId?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    ownerId?: StringFilter<"Project"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    todos?: TodoListRelationFilter
    collaborators?: CollaboratorListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    todos?: TodoOrderByRelationAggregateInput
    collaborators?: CollaboratorOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    ownerId?: StringFilter<"Project"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    todos?: TodoListRelationFilter
    collaborators?: CollaboratorListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    ownerId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type CollaboratorWhereInput = {
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    role?: EnumRoleFilter<"Collaborator"> | $Enums.Role
    createdAt?: DateTimeFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Collaborator"> | Date | string | null
    userId?: StringFilter<"Collaborator"> | string
    projectId?: StringFilter<"Collaborator"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type CollaboratorOrderByWithRelationInput = {
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type CollaboratorWhereUniqueInput = Prisma.AtLeast<{
    userId_projectId?: CollaboratorUserIdProjectIdCompoundUniqueInput
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    role?: EnumRoleFilter<"Collaborator"> | $Enums.Role
    createdAt?: DateTimeFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Collaborator"> | Date | string | null
    userId?: StringFilter<"Collaborator"> | string
    projectId?: StringFilter<"Collaborator"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "userId_projectId">

  export type CollaboratorOrderByWithAggregationInput = {
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    _count?: CollaboratorCountOrderByAggregateInput
    _max?: CollaboratorMaxOrderByAggregateInput
    _min?: CollaboratorMinOrderByAggregateInput
  }

  export type CollaboratorScalarWhereWithAggregatesInput = {
    AND?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    OR?: CollaboratorScalarWhereWithAggregatesInput[]
    NOT?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    role?: EnumRoleWithAggregatesFilter<"Collaborator"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Collaborator"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Collaborator"> | string
    projectId?: StringWithAggregatesFilter<"Collaborator"> | string
  }

  export type TodoWhereInput = {
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    id?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringFilter<"Todo"> | string
    deadline?: DateTimeFilter<"Todo"> | Date | string
    isCompleted?: BoolFilter<"Todo"> | boolean
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    projectId?: StringFilter<"Todo"> | string
    createdBy?: StringFilter<"Todo"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TodoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdBy?: SortOrder
    project?: ProjectOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type TodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    title?: StringFilter<"Todo"> | string
    description?: StringFilter<"Todo"> | string
    deadline?: DateTimeFilter<"Todo"> | Date | string
    isCompleted?: BoolFilter<"Todo"> | boolean
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    projectId?: StringFilter<"Todo"> | string
    createdBy?: StringFilter<"Todo"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TodoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdBy?: SortOrder
    _count?: TodoCountOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    OR?: TodoScalarWhereWithAggregatesInput[]
    NOT?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Todo"> | string
    title?: StringWithAggregatesFilter<"Todo"> | string
    description?: StringWithAggregatesFilter<"Todo"> | string
    deadline?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"Todo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Todo"> | Date | string | null
    projectId?: StringWithAggregatesFilter<"Todo"> | string
    createdBy?: StringWithAggregatesFilter<"Todo"> | string
  }

  export type PersonCreateInput = {
    id?: string
    firstname: string
    lastname?: string | null
    dob: Date | string
    gender: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname?: string | null
    dob: Date | string
    gender: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    firstname: string
    lastname?: string | null
    dob: Date | string
    gender: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    person: PersonCreateNestedOneWithoutUserInput
    todos?: TodoCreateNestedManyWithoutCreatorInput
    collaborations?: CollaboratorCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    personId: string
    todos?: TodoUncheckedCreateNestedManyWithoutCreatorInput
    collaborations?: CollaboratorUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person?: PersonUpdateOneRequiredWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutCreatorNestedInput
    collaborations?: CollaboratorUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personId?: StringFieldUpdateOperationsInput | string
    todos?: TodoUncheckedUpdateManyWithoutCreatorNestedInput
    collaborations?: CollaboratorUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    personId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    todos?: TodoCreateNestedManyWithoutProjectInput
    collaborators?: CollaboratorCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
    todos?: TodoUncheckedCreateNestedManyWithoutProjectInput
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    todos?: TodoUpdateManyWithoutProjectNestedInput
    collaborators?: CollaboratorUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    todos?: TodoUncheckedUpdateManyWithoutProjectNestedInput
    collaborators?: CollaboratorUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type CollaboratorCreateInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCollaborationsInput
    project: ProjectCreateNestedOneWithoutCollaboratorsInput
  }

  export type CollaboratorUncheckedCreateInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userId: string
    projectId: string
  }

  export type CollaboratorUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput
    project?: ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type CollaboratorUncheckedUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CollaboratorCreateManyInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userId: string
    projectId: string
  }

  export type CollaboratorUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CollaboratorUncheckedUpdateManyInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type TodoCreateInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    project: ProjectCreateNestedOneWithoutTodosInput
    creator: UserCreateNestedOneWithoutTodosInput
  }

  export type TodoUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    projectId: string
    createdBy: string
  }

  export type TodoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutTodosNestedInput
    creator?: UserUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type TodoCreateManyInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    projectId: string
    createdBy: string
  }

  export type TodoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TodoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type TodoListRelationFilter = {
    every?: TodoWhereInput
    some?: TodoWhereInput
    none?: TodoWhereInput
  }

  export type CollaboratorListRelationFilter = {
    every?: CollaboratorWhereInput
    some?: CollaboratorWhereInput
    none?: CollaboratorWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TodoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
    isUserVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
    isUserVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
    isUserVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type CollaboratorUserIdProjectIdCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type CollaboratorCountOrderByAggregateInput = {
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type CollaboratorMaxOrderByAggregateInput = {
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type CollaboratorMinOrderByAggregateInput = {
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type TodoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    createdBy?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    createdBy?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    createdBy?: SortOrder
  }

  export type UserCreateNestedOneWithoutPersonInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutPersonNestedInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    upsert?: UserUpsertWithoutPersonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonInput, UserUpdateWithoutPersonInput>, UserUncheckedUpdateWithoutPersonInput>
  }

  export type UserUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    upsert?: UserUpsertWithoutPersonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonInput, UserUpdateWithoutPersonInput>, UserUncheckedUpdateWithoutPersonInput>
  }

  export type PersonCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    connect?: PersonWhereUniqueInput
  }

  export type TodoCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TodoCreateWithoutCreatorInput, TodoUncheckedCreateWithoutCreatorInput> | TodoCreateWithoutCreatorInput[] | TodoUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutCreatorInput | TodoCreateOrConnectWithoutCreatorInput[]
    createMany?: TodoCreateManyCreatorInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type CollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput> | CollaboratorCreateWithoutUserInput[] | CollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutUserInput | CollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: CollaboratorCreateManyUserInputEnvelope
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TodoCreateWithoutCreatorInput, TodoUncheckedCreateWithoutCreatorInput> | TodoCreateWithoutCreatorInput[] | TodoUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutCreatorInput | TodoCreateOrConnectWithoutCreatorInput[]
    createMany?: TodoCreateManyCreatorInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type CollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput> | CollaboratorCreateWithoutUserInput[] | CollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutUserInput | CollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: CollaboratorCreateManyUserInputEnvelope
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PersonUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    upsert?: PersonUpsertWithoutUserInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutUserInput, PersonUpdateWithoutUserInput>, PersonUncheckedUpdateWithoutUserInput>
  }

  export type TodoUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TodoCreateWithoutCreatorInput, TodoUncheckedCreateWithoutCreatorInput> | TodoCreateWithoutCreatorInput[] | TodoUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutCreatorInput | TodoCreateOrConnectWithoutCreatorInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutCreatorInput | TodoUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TodoCreateManyCreatorInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutCreatorInput | TodoUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutCreatorInput | TodoUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type CollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput> | CollaboratorCreateWithoutUserInput[] | CollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutUserInput | CollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutUserInput | CollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollaboratorCreateManyUserInputEnvelope
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutUserInput | CollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutUserInput | CollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TodoUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TodoCreateWithoutCreatorInput, TodoUncheckedCreateWithoutCreatorInput> | TodoCreateWithoutCreatorInput[] | TodoUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutCreatorInput | TodoCreateOrConnectWithoutCreatorInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutCreatorInput | TodoUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TodoCreateManyCreatorInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutCreatorInput | TodoUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutCreatorInput | TodoUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type CollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput> | CollaboratorCreateWithoutUserInput[] | CollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutUserInput | CollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutUserInput | CollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollaboratorCreateManyUserInputEnvelope
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutUserInput | CollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutUserInput | CollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedProjectsInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type TodoCreateNestedManyWithoutProjectInput = {
    create?: XOR<TodoCreateWithoutProjectInput, TodoUncheckedCreateWithoutProjectInput> | TodoCreateWithoutProjectInput[] | TodoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutProjectInput | TodoCreateOrConnectWithoutProjectInput[]
    createMany?: TodoCreateManyProjectInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type CollaboratorCreateNestedManyWithoutProjectInput = {
    create?: XOR<CollaboratorCreateWithoutProjectInput, CollaboratorUncheckedCreateWithoutProjectInput> | CollaboratorCreateWithoutProjectInput[] | CollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutProjectInput | CollaboratorCreateOrConnectWithoutProjectInput[]
    createMany?: CollaboratorCreateManyProjectInputEnvelope
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TodoCreateWithoutProjectInput, TodoUncheckedCreateWithoutProjectInput> | TodoCreateWithoutProjectInput[] | TodoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutProjectInput | TodoCreateOrConnectWithoutProjectInput[]
    createMany?: TodoCreateManyProjectInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type CollaboratorUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CollaboratorCreateWithoutProjectInput, CollaboratorUncheckedCreateWithoutProjectInput> | CollaboratorCreateWithoutProjectInput[] | CollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutProjectInput | CollaboratorCreateOrConnectWithoutProjectInput[]
    createMany?: CollaboratorCreateManyProjectInputEnvelope
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    upsert?: UserUpsertWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedProjectsInput, UserUpdateWithoutOwnedProjectsInput>, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type TodoUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TodoCreateWithoutProjectInput, TodoUncheckedCreateWithoutProjectInput> | TodoCreateWithoutProjectInput[] | TodoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutProjectInput | TodoCreateOrConnectWithoutProjectInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutProjectInput | TodoUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TodoCreateManyProjectInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutProjectInput | TodoUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutProjectInput | TodoUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type CollaboratorUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CollaboratorCreateWithoutProjectInput, CollaboratorUncheckedCreateWithoutProjectInput> | CollaboratorCreateWithoutProjectInput[] | CollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutProjectInput | CollaboratorCreateOrConnectWithoutProjectInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutProjectInput | CollaboratorUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CollaboratorCreateManyProjectInputEnvelope
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutProjectInput | CollaboratorUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutProjectInput | CollaboratorUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type TodoUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TodoCreateWithoutProjectInput, TodoUncheckedCreateWithoutProjectInput> | TodoCreateWithoutProjectInput[] | TodoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutProjectInput | TodoCreateOrConnectWithoutProjectInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutProjectInput | TodoUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TodoCreateManyProjectInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutProjectInput | TodoUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutProjectInput | TodoUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type CollaboratorUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CollaboratorCreateWithoutProjectInput, CollaboratorUncheckedCreateWithoutProjectInput> | CollaboratorCreateWithoutProjectInput[] | CollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollaboratorCreateOrConnectWithoutProjectInput | CollaboratorCreateOrConnectWithoutProjectInput[]
    upsert?: CollaboratorUpsertWithWhereUniqueWithoutProjectInput | CollaboratorUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CollaboratorCreateManyProjectInputEnvelope
    set?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    disconnect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    delete?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    connect?: CollaboratorWhereUniqueInput | CollaboratorWhereUniqueInput[]
    update?: CollaboratorUpdateWithWhereUniqueWithoutProjectInput | CollaboratorUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CollaboratorUpdateManyWithWhereWithoutProjectInput | CollaboratorUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCollaborationsInput = {
    create?: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollaboratorsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutCollaborationsNestedInput = {
    create?: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput
    upsert?: UserUpsertWithoutCollaborationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollaborationsInput, UserUpdateWithoutCollaborationsInput>, UserUncheckedUpdateWithoutCollaborationsInput>
  }

  export type ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollaboratorsInput
    upsert?: ProjectUpsertWithoutCollaboratorsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCollaboratorsInput, ProjectUpdateWithoutCollaboratorsInput>, ProjectUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type ProjectCreateNestedOneWithoutTodosInput = {
    create?: XOR<ProjectCreateWithoutTodosInput, ProjectUncheckedCreateWithoutTodosInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTodosInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTodosInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<ProjectCreateWithoutTodosInput, ProjectUncheckedCreateWithoutTodosInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTodosInput
    upsert?: ProjectUpsertWithoutTodosInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTodosInput, ProjectUpdateWithoutTodosInput>, ProjectUncheckedUpdateWithoutTodosInput>
  }

  export type UserUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    upsert?: UserUpsertWithoutTodosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodosInput, UserUpdateWithoutTodosInput>, UserUncheckedUpdateWithoutTodosInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserCreateWithoutPersonInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    todos?: TodoCreateNestedManyWithoutCreatorInput
    collaborations?: CollaboratorCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutPersonInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    todos?: TodoUncheckedCreateNestedManyWithoutCreatorInput
    collaborations?: CollaboratorUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPersonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
  }

  export type UserUpsertWithoutPersonInput = {
    update: XOR<UserUpdateWithoutPersonInput, UserUncheckedUpdateWithoutPersonInput>
    create: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonInput, UserUncheckedUpdateWithoutPersonInput>
  }

  export type UserUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todos?: TodoUpdateManyWithoutCreatorNestedInput
    collaborations?: CollaboratorUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todos?: TodoUncheckedUpdateManyWithoutCreatorNestedInput
    collaborations?: CollaboratorUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PersonCreateWithoutUserInput = {
    id?: string
    firstname: string
    lastname?: string | null
    dob: Date | string
    gender: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PersonUncheckedCreateWithoutUserInput = {
    id?: string
    firstname: string
    lastname?: string | null
    dob: Date | string
    gender: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PersonCreateOrConnectWithoutUserInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
  }

  export type TodoCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    project: ProjectCreateNestedOneWithoutTodosInput
  }

  export type TodoUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    projectId: string
  }

  export type TodoCreateOrConnectWithoutCreatorInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutCreatorInput, TodoUncheckedCreateWithoutCreatorInput>
  }

  export type TodoCreateManyCreatorInputEnvelope = {
    data: TodoCreateManyCreatorInput | TodoCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CollaboratorCreateWithoutUserInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    project: ProjectCreateNestedOneWithoutCollaboratorsInput
  }

  export type CollaboratorUncheckedCreateWithoutUserInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    projectId: string
  }

  export type CollaboratorCreateOrConnectWithoutUserInput = {
    where: CollaboratorWhereUniqueInput
    create: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput>
  }

  export type CollaboratorCreateManyUserInputEnvelope = {
    data: CollaboratorCreateManyUserInput | CollaboratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    todos?: TodoCreateNestedManyWithoutProjectInput
    collaborators?: CollaboratorCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    todos?: TodoUncheckedCreateNestedManyWithoutProjectInput
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutUserInput = {
    update: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutUserInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
  }

  export type PersonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TodoUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutCreatorInput, TodoUncheckedUpdateWithoutCreatorInput>
    create: XOR<TodoCreateWithoutCreatorInput, TodoUncheckedCreateWithoutCreatorInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutCreatorInput, TodoUncheckedUpdateWithoutCreatorInput>
  }

  export type TodoUpdateManyWithWhereWithoutCreatorInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TodoScalarWhereInput = {
    AND?: TodoScalarWhereInput | TodoScalarWhereInput[]
    OR?: TodoScalarWhereInput[]
    NOT?: TodoScalarWhereInput | TodoScalarWhereInput[]
    id?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringFilter<"Todo"> | string
    deadline?: DateTimeFilter<"Todo"> | Date | string
    isCompleted?: BoolFilter<"Todo"> | boolean
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    projectId?: StringFilter<"Todo"> | string
    createdBy?: StringFilter<"Todo"> | string
  }

  export type CollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: CollaboratorWhereUniqueInput
    update: XOR<CollaboratorUpdateWithoutUserInput, CollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<CollaboratorCreateWithoutUserInput, CollaboratorUncheckedCreateWithoutUserInput>
  }

  export type CollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: CollaboratorWhereUniqueInput
    data: XOR<CollaboratorUpdateWithoutUserInput, CollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type CollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: CollaboratorScalarWhereInput
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type CollaboratorScalarWhereInput = {
    AND?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
    OR?: CollaboratorScalarWhereInput[]
    NOT?: CollaboratorScalarWhereInput | CollaboratorScalarWhereInput[]
    role?: EnumRoleFilter<"Collaborator"> | $Enums.Role
    createdAt?: DateTimeFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Collaborator"> | Date | string | null
    userId?: StringFilter<"Collaborator"> | string
    projectId?: StringFilter<"Collaborator"> | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    ownerId?: StringFilter<"Project"> | string
  }

  export type UserCreateWithoutOwnedProjectsInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    person: PersonCreateNestedOneWithoutUserInput
    todos?: TodoCreateNestedManyWithoutCreatorInput
    collaborations?: CollaboratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedProjectsInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    personId: string
    todos?: TodoUncheckedCreateNestedManyWithoutCreatorInput
    collaborations?: CollaboratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
  }

  export type TodoCreateWithoutProjectInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    creator: UserCreateNestedOneWithoutTodosInput
  }

  export type TodoUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy: string
  }

  export type TodoCreateOrConnectWithoutProjectInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutProjectInput, TodoUncheckedCreateWithoutProjectInput>
  }

  export type TodoCreateManyProjectInputEnvelope = {
    data: TodoCreateManyProjectInput | TodoCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CollaboratorCreateWithoutProjectInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCollaborationsInput
  }

  export type CollaboratorUncheckedCreateWithoutProjectInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userId: string
  }

  export type CollaboratorCreateOrConnectWithoutProjectInput = {
    where: CollaboratorWhereUniqueInput
    create: XOR<CollaboratorCreateWithoutProjectInput, CollaboratorUncheckedCreateWithoutProjectInput>
  }

  export type CollaboratorCreateManyProjectInputEnvelope = {
    data: CollaboratorCreateManyProjectInput | CollaboratorCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedProjectsInput = {
    update: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type UserUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person?: PersonUpdateOneRequiredWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutCreatorNestedInput
    collaborations?: CollaboratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personId?: StringFieldUpdateOperationsInput | string
    todos?: TodoUncheckedUpdateManyWithoutCreatorNestedInput
    collaborations?: CollaboratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TodoUpsertWithWhereUniqueWithoutProjectInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutProjectInput, TodoUncheckedUpdateWithoutProjectInput>
    create: XOR<TodoCreateWithoutProjectInput, TodoUncheckedCreateWithoutProjectInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutProjectInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutProjectInput, TodoUncheckedUpdateWithoutProjectInput>
  }

  export type TodoUpdateManyWithWhereWithoutProjectInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutProjectInput>
  }

  export type CollaboratorUpsertWithWhereUniqueWithoutProjectInput = {
    where: CollaboratorWhereUniqueInput
    update: XOR<CollaboratorUpdateWithoutProjectInput, CollaboratorUncheckedUpdateWithoutProjectInput>
    create: XOR<CollaboratorCreateWithoutProjectInput, CollaboratorUncheckedCreateWithoutProjectInput>
  }

  export type CollaboratorUpdateWithWhereUniqueWithoutProjectInput = {
    where: CollaboratorWhereUniqueInput
    data: XOR<CollaboratorUpdateWithoutProjectInput, CollaboratorUncheckedUpdateWithoutProjectInput>
  }

  export type CollaboratorUpdateManyWithWhereWithoutProjectInput = {
    where: CollaboratorScalarWhereInput
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserCreateWithoutCollaborationsInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    person: PersonCreateNestedOneWithoutUserInput
    todos?: TodoCreateNestedManyWithoutCreatorInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCollaborationsInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    personId: string
    todos?: TodoUncheckedCreateNestedManyWithoutCreatorInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCollaborationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
  }

  export type ProjectCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    todos?: TodoCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
    todos?: TodoUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCollaboratorsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserUpsertWithoutCollaborationsInput = {
    update: XOR<UserUpdateWithoutCollaborationsInput, UserUncheckedUpdateWithoutCollaborationsInput>
    create: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollaborationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollaborationsInput, UserUncheckedUpdateWithoutCollaborationsInput>
  }

  export type UserUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person?: PersonUpdateOneRequiredWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutCreatorNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personId?: StringFieldUpdateOperationsInput | string
    todos?: TodoUncheckedUpdateManyWithoutCreatorNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ProjectUpsertWithoutCollaboratorsInput = {
    update: XOR<ProjectUpdateWithoutCollaboratorsInput, ProjectUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCollaboratorsInput, ProjectUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type ProjectUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    todos?: TodoUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    todos?: TodoUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutTodosInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    collaborators?: CollaboratorCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTodosInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ownerId: string
    collaborators?: CollaboratorUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTodosInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTodosInput, ProjectUncheckedCreateWithoutTodosInput>
  }

  export type UserCreateWithoutTodosInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    person: PersonCreateNestedOneWithoutUserInput
    collaborations?: CollaboratorCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutTodosInput = {
    id?: string
    email: string
    username: string
    password: string
    refreshToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    isUserVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    personId: string
    collaborations?: CollaboratorUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutTodosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
  }

  export type ProjectUpsertWithoutTodosInput = {
    update: XOR<ProjectUpdateWithoutTodosInput, ProjectUncheckedUpdateWithoutTodosInput>
    create: XOR<ProjectCreateWithoutTodosInput, ProjectUncheckedCreateWithoutTodosInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTodosInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTodosInput, ProjectUncheckedUpdateWithoutTodosInput>
  }

  export type ProjectUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    collaborators?: CollaboratorUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    collaborators?: CollaboratorUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutTodosInput = {
    update: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
  }

  export type UserUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person?: PersonUpdateOneRequiredWithoutUserNestedInput
    collaborations?: CollaboratorUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isUserVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personId?: StringFieldUpdateOperationsInput | string
    collaborations?: CollaboratorUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type TodoCreateManyCreatorInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    projectId: string
  }

  export type CollaboratorCreateManyUserInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    projectId: string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TodoUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type TodoUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CollaboratorUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type CollaboratorUncheckedUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CollaboratorUncheckedUpdateManyWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todos?: TodoUpdateManyWithoutProjectNestedInput
    collaborators?: CollaboratorUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todos?: TodoUncheckedUpdateManyWithoutProjectNestedInput
    collaborators?: CollaboratorUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TodoCreateManyProjectInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    createdBy: string
  }

  export type CollaboratorCreateManyProjectInput = {
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userId: string
  }

  export type TodoUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type TodoUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type CollaboratorUpdateWithoutProjectInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type CollaboratorUncheckedUpdateWithoutProjectInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CollaboratorUncheckedUpdateManyWithoutProjectInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }



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