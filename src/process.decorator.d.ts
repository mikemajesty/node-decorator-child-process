/**
 * Module providing decorators for execution in separate threads.
 */
declare module 'node-decorator-child-process' {
  /**
   * Executes the decorated method in a separate thread.
   *
   * @param timeout - Maximum time in milliseconds for the thread execution. If not provided, there is no timeout.
   * @returns A method decorator that executes the method in a separate thread.
   */
  export function RunInNewProcess(timeout?: number): MethodDecorator;
}
