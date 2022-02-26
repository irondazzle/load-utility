import http from 'k6/http';
import { Trend } from 'k6/metrics';

import { Endpoint } from '../endpoints/endpoint.js';

const trends = {
  endpoint: new Trend('endpoint'),
};

export default function () {
  const endpoint = new Endpoint();
  const response = http.request(...endpoint.getEndpoint());

  trends.endpoint.add(response.timings.duration);
};
