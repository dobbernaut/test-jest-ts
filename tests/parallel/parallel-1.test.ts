import { pause } from '@service/utils';

describe('Parallel - 1 @grepthis', () => {
  it('should run in parallel', async () => {
    await pause(3);
    expect(1).toEqual(1);
  });
});
