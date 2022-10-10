import type { BuilderContext } from '@angular-devkit/architect';
import * as buildAngular from '@angular-devkit/build-angular';
import { createMock } from 'ts-auto-mock';

import { executeBrowserBuilder, BrowserBuilderOptions } from './browser';

jest.mock('@angular-devkit/build-angular');

describe('Browser Builder', () => {
  let executeAngularBrowserBuilderSpy: jest.SpyInstance;

  beforeEach(() => {
    executeAngularBrowserBuilderSpy = jest.spyOn(
      buildAngular,
      'executeBrowserBuilder',
    );
  });

  it('should forward options and context, as is', () => {
    const context = createMock<BuilderContext>();
    const options = createMock<BrowserBuilderOptions>();

    executeBrowserBuilder(options, context);

    expect(executeAngularBrowserBuilderSpy).toHaveBeenCalledTimes(1);
    expect(executeAngularBrowserBuilderSpy).toHaveBeenCalledWith(
      options,
      context,
    );
  });
});
