import { CameraRoll } from '@react-native-camera-roll/camera-roll';

import {ImageForUpload, PhotoListPaginated} from './multiMidiaType';

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  // after => vai buscar a proxima pagina, a partir do elemento 'cursor' que é passado nele.
const photoPage = await CameraRoll.getPhotos({first: 12,after:cursor});

const photoList = photoPage.edges.map(edge => edge.node.image.uri);

return {
  photoList,
  cursor:photoPage.page_info.end_cursor,
  hasNextPage:photoPage.page_info.has_next_page,
};
}


function prepareImageForUploas(imageUri: string): ImageForUpload {
  return {
    name: imageUri,
    type: 'image/jpeg',
    uri: 'path',
  };
}

export const multiMidiaService = {
  prepareImageForUploas,
  getPhotos,
};
