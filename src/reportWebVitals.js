import {ConsoleInstrumentation, getWebInstrumentations, initializeFaro} from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

var _faro = null;
export function initFaro() {
  _faro = initializeFaro({
    url: 'http://localhost:12346/collect',
    apiKey: 'my_super_app_key',
    app: {
      name: 'frontend',
      version: '1.0.0',
    },
  });
}

export function initFaroOTEL() {
  _faro = initializeFaro({
    url: 'http://localhost:12346/collect',
    apiKey: 'my_super_app_key',
    trackWebVitalsAttribution: true,
    instrumentations: [...getWebInstrumentations(), new TracingInstrumentation(), new ConsoleInstrumentation()],
    app: {
      name: 'frontend',
      version: '1.0.0',
    },
  });
}

export const faro = _faro;