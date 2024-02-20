function getEnv(key: string): string | undefined {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    return 'test';
  }
  return process.env[key];
}

export default {
  NODE_ENV: getEnv('NODE_ENV'),
};
