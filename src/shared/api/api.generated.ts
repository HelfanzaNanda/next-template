/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Nestplate | Auth
 * The API description
 * OpenAPI spec version: 1.0
 */

import { faker } from '@faker-js/faker';
import { rest } from 'msw';

import { httpClient, type BodyType } from './http-client';

export type LoginGithubViaCallbackParams = {
  state?: string;
};

export type AuthGithubControllerGoogleAuthParams = {
  from: string;
};

export type LoginGoogleViaCallbackParams = {
  state?: string;
};

export type AuthGoogleControllerGoogleAuthParams = {
  from: string;
};

export type AuthProviders = (typeof AuthProviders)[keyof typeof AuthProviders];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthProviders = {
  email: 'email',
  facebook: 'facebook',
  google: 'google',
  twitter: 'twitter',
  apple: 'apple',
  github: 'github',
} as const;

export interface Account {
  id: number;
  user: User;
  userId: number;
  provider: AuthProviders;
  providerAccountId: string;
}

export interface CreateAccountDto {
  userId: number;
  provider: string;
  providerAccountId: string;
}

export interface Tokens {
  access: string;
  refresh: string;
}

export interface AuthEmailLoginDto {
  /** User email */
  email: string;
  /** User password */
  password: string;
}

export interface AuthRegisterLoginDto {
  /** User email */
  email: string;
  /** User password */
  password: string;
  /** User username */
  username: string;
}

export interface TokenPayload {
  id: number;
  iat: number;
  exp: number;
}

export interface Session {
  id: number;
  user?: User;
  userId: number;
  ip: string;
  userAgent: string;
  os: string;
  browser: string;
  expiresIn: number;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserDto {
  /** User email */
  email?: string;
  /** User password */
  password?: string;
  /** User username */
  username?: string;
}

export interface User {
  id: number;
  email?: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface CreateUserDto {
  /** User email */
  email: string;
  /** User password */
  password: string;
  /** User username */
  username: string;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never;

/**
 * Creates new user in database
 * @summary Create new user
 */
export const createUser = (createUserDto: BodyType<CreateUserDto>, options?: SecondParameter<typeof httpClient>) => {
  return httpClient<User>(
    {
      url: '/api/v1/users',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createUserDto,
    },
    options,
  );
};

/**
 * Finds all users in database
 * @summary Find all users
 */
export const findAllUsers = (options?: SecondParameter<typeof httpClient>) => {
  return httpClient<User[]>({ url: '/api/v1/users', method: 'get' }, options);
};

/**
 * Finds user by id in database
 * @summary Find user by id
 */
export const findUserById = (id: number, options?: SecondParameter<typeof httpClient>) => {
  return httpClient<User>({ url: `/api/v1/users/${id}`, method: 'get' }, options);
};

/**
 * Updates user by id in database
 * @summary Update user by id
 */
export const updateUserById = (
  id: number,
  updateUserDto: BodyType<UpdateUserDto>,
  options?: SecondParameter<typeof httpClient>,
) => {
  return httpClient<unknown>(
    {
      url: `/api/v1/users/${id}`,
      method: 'patch',
      headers: { 'Content-Type': 'application/json' },
      data: updateUserDto,
    },
    options,
  );
};

/**
 * Deletes user by id in database
 * @summary Delete user by id
 */
export const deleteUserById = (id: number, options?: SecondParameter<typeof httpClient>) => {
  return httpClient<unknown>({ url: `/api/v1/users/${id}`, method: 'delete' }, options);
};

/**
 * Find all user's sessions
 * @summary Find all user's sessions
 */
export const findUserSessions = (options?: SecondParameter<typeof httpClient>) => {
  return httpClient<Session[]>({ url: '/api/v1/sessions', method: 'get' }, options);
};

/**
 * Delete all user's session by id
 * @summary Delete all user's session by id
 */
export const deleteAllUserSessions = (options?: SecondParameter<typeof httpClient>) => {
  return httpClient<void>({ url: '/api/v1/sessions', method: 'delete' }, options);
};

/**
 * Delete user's session by id
 * @summary Delete user's session by id
 */
export const deleteUserSessionById = (id: number, options?: SecondParameter<typeof httpClient>) => {
  return httpClient<void>({ url: `/api/v1/sessions/${id}`, method: 'delete' }, options);
};

/**
 * Creates new user in database
 * @summary Create new user
 */
export const register = (
  authRegisterLoginDto: BodyType<AuthRegisterLoginDto>,
  options?: SecondParameter<typeof httpClient>,
) => {
  return httpClient<void>(
    {
      url: '/api/v1/auth/register',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: authRegisterLoginDto,
    },
    options,
  );
};

/**
 * Creates new user's session in database
 * @summary Login user
 */
export const login = (authEmailLoginDto: BodyType<AuthEmailLoginDto>, options?: SecondParameter<typeof httpClient>) => {
  return httpClient<Tokens>(
    {
      url: '/api/v1/auth/login',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: authEmailLoginDto,
    },
    options,
  );
};

/**
 * Deletes user's session in database
 * @summary Logout user
 */
export const logout = (options?: SecondParameter<typeof httpClient>) => {
  return httpClient<void>({ url: '/api/v1/auth/logout', method: 'post' }, options);
};

/**
 * Refresh token for user's session in database
 * @summary Refresh user tokens
 */
export const refresh = (options?: SecondParameter<typeof httpClient>) => {
  return httpClient<Tokens>({ url: '/api/v1/auth/refresh', method: 'post' }, options);
};

export const authGoogleControllerGoogleAuth = (
  params: AuthGoogleControllerGoogleAuthParams,
  options?: SecondParameter<typeof httpClient>,
) => {
  return httpClient<void>({ url: '/api/v1/auth/google', method: 'get', params }, options);
};

/**
 * Creates new user's session in database
 * @summary Login user via Google
 */
export const loginGoogleViaCallback = (
  params?: LoginGoogleViaCallbackParams,
  options?: SecondParameter<typeof httpClient>,
) => {
  return httpClient<Tokens>({ url: '/api/v1/auth/google/callback', method: 'get', params }, options);
};

export const authGithubControllerGoogleAuth = (
  params: AuthGithubControllerGoogleAuthParams,
  options?: SecondParameter<typeof httpClient>,
) => {
  return httpClient<void>({ url: '/api/v1/auth/github', method: 'get', params }, options);
};

/**
 * Creates new user's session in database
 * @summary Login user via Github
 */
export const loginGithubViaCallback = (
  params?: LoginGithubViaCallbackParams,
  options?: SecondParameter<typeof httpClient>,
) => {
  return httpClient<Tokens>({ url: '/api/v1/auth/github/callback', method: 'get', params }, options);
};

/**
 * @summary Creates an account for user
 */
export const createUserAccount = (
  createAccountDto: BodyType<CreateAccountDto>,
  options?: SecondParameter<typeof httpClient>,
) => {
  return httpClient<Account>(
    {
      url: '/api/v1/accounts',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createAccountDto,
    },
    options,
  );
};

export type CreateUserResult = NonNullable<Awaited<ReturnType<typeof createUser>>>;
export type FindAllUsersResult = NonNullable<Awaited<ReturnType<typeof findAllUsers>>>;
export type FindUserByIdResult = NonNullable<Awaited<ReturnType<typeof findUserById>>>;
export type UpdateUserByIdResult = NonNullable<Awaited<ReturnType<typeof updateUserById>>>;
export type DeleteUserByIdResult = NonNullable<Awaited<ReturnType<typeof deleteUserById>>>;
export type FindUserSessionsResult = NonNullable<Awaited<ReturnType<typeof findUserSessions>>>;
export type DeleteAllUserSessionsResult = NonNullable<Awaited<ReturnType<typeof deleteAllUserSessions>>>;
export type DeleteUserSessionByIdResult = NonNullable<Awaited<ReturnType<typeof deleteUserSessionById>>>;
export type RegisterResult = NonNullable<Awaited<ReturnType<typeof register>>>;
export type LoginResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LogoutResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type RefreshResult = NonNullable<Awaited<ReturnType<typeof refresh>>>;
export type AuthGoogleControllerGoogleAuthResult = NonNullable<
  Awaited<ReturnType<typeof authGoogleControllerGoogleAuth>>
>;
export type LoginGoogleViaCallbackResult = NonNullable<Awaited<ReturnType<typeof loginGoogleViaCallback>>>;
export type AuthGithubControllerGoogleAuthResult = NonNullable<
  Awaited<ReturnType<typeof authGithubControllerGoogleAuth>>
>;
export type LoginGithubViaCallbackResult = NonNullable<Awaited<ReturnType<typeof loginGithubViaCallback>>>;
export type CreateUserAccountResult = NonNullable<Awaited<ReturnType<typeof createUserAccount>>>;

export const getCreateUserMock = () => ({
  id: faker.datatype.number({ min: undefined, max: undefined }),
  email: faker.helpers.arrayElement([faker.random.word(), undefined]),
  username: faker.random.word(),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
});

export const getFindAllUsersMock = () =>
  Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
    id: faker.datatype.number({ min: undefined, max: undefined }),
    email: faker.helpers.arrayElement([faker.random.word(), undefined]),
    username: faker.random.word(),
    createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  }));

export const getFindUserByIdMock = () => ({
  id: faker.datatype.number({ min: undefined, max: undefined }),
  email: faker.helpers.arrayElement([faker.random.word(), undefined]),
  username: faker.random.word(),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
});

export const getFindUserSessionsMock = () =>
  Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
    id: faker.datatype.number({ min: undefined, max: undefined }),
    user: faker.helpers.arrayElement([
      {
        id: faker.datatype.number({ min: undefined, max: undefined }),
        email: faker.helpers.arrayElement([faker.random.word(), undefined]),
        username: faker.random.word(),
        createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
        updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
        deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
      },
      undefined,
    ]),
    userId: faker.datatype.number({ min: undefined, max: undefined }),
    ip: faker.random.word(),
    userAgent: faker.random.word(),
    os: faker.random.word(),
    browser: faker.random.word(),
    expiresIn: faker.datatype.number({ min: undefined, max: undefined }),
    createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  }));

export const getLoginMock = () => ({
  access:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODM5OTY0NDcsImV4cCI6MTcxNTUzMjQ1MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiJ9.s6hH_wBzR8BtWzTdTCCQ-mcuDFyJz_q_4lUNKK95EyA',
  refresh:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODM5OTY0NjMsImV4cCI6MTY4Mzk5NzY2NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiJ9.1msAjPLJQAkAa2WQ5QVmkT5pPRUdT9kGy8JRFWziPHk',
});

export const getRefreshMock = () => ({
  access:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODM5OTY0NDcsImV4cCI6MTcxNTUzMjQ1MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiJ9.s6hH_wBzR8BtWzTdTCCQ-mcuDFyJz_q_4lUNKK95EyA',
  refresh:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODM5OTY0NjMsImV4cCI6MTY4Mzk5NzY2NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiJ9.1msAjPLJQAkAa2WQ5QVmkT5pPRUdT9kGy8JRFWziPHk',
});

export const getLoginGoogleViaCallbackMock = () => ({
  access:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODM5OTY0NDcsImV4cCI6MTcxNTUzMjQ1MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiJ9.s6hH_wBzR8BtWzTdTCCQ-mcuDFyJz_q_4lUNKK95EyA',
  refresh:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODM5OTY0NjMsImV4cCI6MTY4Mzk5NzY2NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiJ9.1msAjPLJQAkAa2WQ5QVmkT5pPRUdT9kGy8JRFWziPHk',
});

export const getLoginGithubViaCallbackMock = () => ({
  access:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODM5OTY0NDcsImV4cCI6MTcxNTUzMjQ1MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiJ9.s6hH_wBzR8BtWzTdTCCQ-mcuDFyJz_q_4lUNKK95EyA',
  refresh:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODM5OTY0NjMsImV4cCI6MTY4Mzk5NzY2NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiJ9.1msAjPLJQAkAa2WQ5QVmkT5pPRUdT9kGy8JRFWziPHk',
});

export const getCreateUserAccountMock = () => ({
  id: faker.datatype.number({ min: undefined, max: undefined }),
  user: {
    id: faker.datatype.number({ min: undefined, max: undefined }),
    email: faker.helpers.arrayElement([faker.random.word(), undefined]),
    username: faker.random.word(),
    createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    deletedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  },
  userId: faker.datatype.number({ min: undefined, max: undefined }),
  provider: faker.helpers.arrayElement(Object.values(AuthProviders)),
  providerAccountId: faker.random.word(),
});

export const getNestplateAuthMSW = () => [
  rest.post('*/api/v1/users', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getCreateUserMock()));
  }),
  rest.get('*/api/v1/users', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getFindAllUsersMock()));
  }),
  rest.get('*/api/v1/users/:id', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getFindUserByIdMock()));
  }),
  rest.patch('*/api/v1/users/:id', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.delete('*/api/v1/users/:id', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.get('*/api/v1/sessions', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getFindUserSessionsMock()));
  }),
  rest.delete('*/api/v1/sessions', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.delete('*/api/v1/sessions/:id', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.post('*/api/v1/auth/register', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.post('*/api/v1/auth/login', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getLoginMock()));
  }),
  rest.post('*/api/v1/auth/logout', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.post('*/api/v1/auth/refresh', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getRefreshMock()));
  }),
  rest.get('*/api/v1/auth/google', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.get('*/api/v1/auth/google/callback', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getLoginGoogleViaCallbackMock()));
  }),
  rest.get('*/api/v1/auth/github', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.get('*/api/v1/auth/github/callback', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getLoginGithubViaCallbackMock()));
  }),
  rest.post('*/api/v1/accounts', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getCreateUserAccountMock()));
  }),
];
