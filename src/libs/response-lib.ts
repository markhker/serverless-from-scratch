import { allowedOrigins } from '@config/constants';

type ApiResponse = {
  origin: string | undefined;
  body: { [key: string]: any; };
  statusCode?: number;
};

const getHeaders = (origin: ApiResponse['origin']) => {
  let headers;

  if (origin && allowedOrigins.includes(origin)) {
    headers = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Credentials': true,
    };
  } else {
    headers = {
      'Access-Control-Allow-Origin': '*',
    };
  }

  return headers;
};

const buildResponse = ({body, origin, statusCode}: ApiResponse) => ({
  statusCode,
  headers: getHeaders(origin),
  body: JSON.stringify(body, null, 2),
});

export const success = ({body, origin, statusCode = 200}: ApiResponse) =>
  buildResponse({
    statusCode,
    origin,
    body: {
      success: true,
      status: 'ok',
      ...body,
    },
  });

export const error = ({body, origin, statusCode = 400}: ApiResponse) =>
  buildResponse({
    statusCode,
    origin,
    body: {
      success: false,
      status: 'user-error',
      ...body,
    },
  });

export const failure = ({body, origin, statusCode = 500}: ApiResponse) =>
  buildResponse({
    statusCode,
    origin,
    body: {
      success: false,
      status: 'error',
      ...body,
    },
  });
