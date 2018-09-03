import util from 'ethereumjs-util';

export const stringToBytes32 = text => {
  return util.bufferToHex(util.setLengthRight(text, 32));
};
