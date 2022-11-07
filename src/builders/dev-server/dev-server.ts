import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import {
  executeDevServerBuilder as executeAngularDevServerBuilder,
  DevServerBuilderOptions as AngularDevServerBuilderOptions,
  DevServerBuilderOutput as AngularDevServerBuilderOutput,
} from '@angular-devkit/build-angular';
import type { Observable } from 'rxjs';
import IcWebpackPlugin from '@solec/ic-webpack-plugin';
import merge from 'webpack-merge';

export type DevServerBuilderOptions = AngularDevServerBuilderOptions;

export type DevServerBuilderOutput = AngularDevServerBuilderOutput;

export function executeDevServerBuilder(
  options: DevServerBuilderOptions,
  context: BuilderContext,
): Observable<DevServerBuilderOutput> {
  return executeAngularDevServerBuilder(options, context, {
    webpackConfiguration: originalWebpackConfig =>
      merge(originalWebpackConfig, {
        plugins: [new IcWebpackPlugin()],
      }),
  });
}

export default createBuilder(executeDevServerBuilder);
