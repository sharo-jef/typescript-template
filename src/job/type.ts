export interface Job {
  exec(): Promise<void>;
}
