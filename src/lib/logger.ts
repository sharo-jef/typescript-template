/* eslint-disable no-console */
export const Logger = {
  ...console,
  silent: false,
  log(...data: unknown[]) {
    if (!this.silent) {
      console.log(...data);
    }
  },
  error(...data: unknown[]) {
    if (!this.silent) {
      console.error(...data);
    }
  },
  warn(...data: unknown[]) {
    if (!this.silent) {
      console.warn(...data);
    }
  },
  info(...data: unknown[]) {
    if (!this.silent) {
      console.info(...data);
    }
  },
  debug(...data: unknown[]) {
    if (!this.silent) {
      console.debug(...data);
    }
  },
  trace(...data: unknown[]) {
    if (!this.silent) {
      console.trace(...data);
    }
  },
};
