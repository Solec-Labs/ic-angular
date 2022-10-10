import type { BuilderContext } from '@angular-devkit/architect';
import * as buildAngular from '@angular-devkit/build-angular';
import { createMock } from 'ts-auto-mock';

import { executeDevServerBuilder, DevServerBuilderOptions } from './dev-server';

jest.mock('@angular-devkit/build-angular');

describe('Dev Server Builder', () => {
  let executeAngularDevServerBuilderSpy: jest.SpyInstance;

  beforeEach(() => {
    executeAngularDevServerBuilderSpy = jest.spyOn(
      buildAngular,
      'executeDevServerBuilder',
    );
  });

  it('should forward options and context, as is', () => {
    const context = createMock<BuilderContext>();
    const options = createMock<DevServerBuilderOptions>();

    executeDevServerBuilder(options, context);

    expect(executeAngularDevServerBuilderSpy).toHaveBeenCalledTimes(1);
    expect(executeAngularDevServerBuilderSpy).toHaveBeenCalledWith(
      options,
      context,
    );
  });
});
