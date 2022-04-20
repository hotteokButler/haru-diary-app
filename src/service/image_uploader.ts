export interface IImageUploader {
  upload?(file: any): Promise<any>;
}

class ImageUploader implements IImageUploader {
  async upload(file: any) {
    const formData = new FormData();
    const url = 'https://api.cloudinary.com/v1_1/dacrqvzln/image/upload';
    formData.append('file', file);
    formData.append('upload_preset', 'tvniqusm');

    const request = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    return await request.json();
  }
}

export default ImageUploader;
