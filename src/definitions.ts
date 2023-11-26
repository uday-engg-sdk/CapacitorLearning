export interface samplePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
