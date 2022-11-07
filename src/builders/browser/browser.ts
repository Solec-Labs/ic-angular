import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import {
  executeBrowserBuilder as executeAngularBrowserBuilder,
  BrowserBuilderOptions as AngularBrowserBuilderOptions,
  BrowserBuilderOutput as AngularBrowserBuilderOutput,
} from '@angular-devkit/build-angular';
import type { Observable } from 'rxjs';
import { IcCanisterPlugin } from '@solec/ic-webpack-plugin/dist/ic-canister-plugin';
import merge from 'webpack-merge';

export type BrowserBuilderOptions = AngularBrowserBuilderOptions;

export type BrowserBuilderOutput = AngularBrowserBuilderOutput;

export function executeBrowserBuilder(
  options: BrowserBuilderOptions,
  context: BuilderContext,
): Observable<BrowserBuilderOutput> {
  return executeAngularBrowserBuilder(options, context, {
    webpackConfiguration: originalWebpackConfig =>
      merge(originalWebpackConfig, {
        plugins: [new IcCanisterPlugin()],
      }),
  });
}

export default createBuilder(executeBrowserBuilder);
