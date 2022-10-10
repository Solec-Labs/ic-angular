import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import {
  executeDevServerBuilder as executeAngularDevServerBuilder,
  DevServerBuilderOptions as AngularDevServerBuilderOptions,
  DevServerBuilderOutput as AngularDevServerBuilderOutput,
} from '@angular-devkit/build-angular';
import type { Observable } from 'rxjs';

export type DevServerBuilderOptions = AngularDevServerBuilderOptions;

export type DevServerBuilderOutput = AngularDevServerBuilderOutput;

export function executeDevServerBuilder(
  options: DevServerBuilderOptions,
  context: BuilderContext,
): Observable<DevServerBuilderOutput> {
  return executeAngularDevServerBuilder(options, context);
}

export default createBuilder(executeDevServerBuilder);
