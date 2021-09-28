import { GenderEmojiPipe } from './gender-emoji.pipe';

describe('GenderEmojiPipe', () => {
  const pipe = new GenderEmojiPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add emoji 👦 to any male people', () => {
    expect(pipe.transform('male')).toBe('male 👦');
  });

  it('should add emoji 👧 to any female', () => {
    expect(pipe.transform('female')).toBe('female 👧');
  });
});
