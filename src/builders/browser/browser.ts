import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import {
  executeBrowserBuilder as executeAngularBrowserBuilder,
  BrowserBuilderOptions as AngularBrowserBuilderOptions,
  BrowserBuilderOutput as AngularBrowserBuilderOutput,
} from '@angular-devkit/build-angular';
import type { Observable } from 'rxjs';

export type BrowserBuilderOptions = AngularBrowserBuilderOptions;

export type BrowserBuilderOutput = AngularBrowserBuilderOutput;

export function executeBrowserBuilder(
  options: BrowserBuilderOptions,
  context: BuilderContext,
): Observable<BrowserBuilderOutput> {
  return executeAngularBrowserBuilder(options, context);
}

export default createBuilder(executeBrowserBuilder);
