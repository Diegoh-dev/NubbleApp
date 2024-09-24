import {ImageForUpload} from './multiMidiaType';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function prepareImageForUploas(imageUri: string): ImageForUpload {
  return {
    name: imageUri,
    type: 'image/jpeg',
    uri: 'path',
  };
}

export const multiMidiaService = {
  prepareImageForUploas,
};
