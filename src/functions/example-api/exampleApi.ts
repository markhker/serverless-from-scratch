
import { APIGatewayEvent, Context } from 'aws-lambda';
import 'source-map-support/register';

import * as res from '@libs/response-lib';

export const main = async (event: APIGatewayEvent, _context: Context) => {
  const { origin } = event.headers;
  const example = 'Example Api';

  return res.success({
    body: { example },
    origin,
  });
};