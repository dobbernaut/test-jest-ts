import { pause } from '@services/utils';

describe('Parallel - 2 @grepthis', () => {
  it('should run in parallel', async () => {
    await pause(3);
    expect(1).toEqual(1);
  });
});
