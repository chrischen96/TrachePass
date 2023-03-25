import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource, CameraDirection } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  //initiate array for storing photo webpath
  public photos: Photo[] = [];
  //set the strage key for photos can be changed
  private PHOTO_STORAGE: string = "photos";
  //setting platform
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  //loading photo
  public async loadSaved(photos:Photo[]) {
    // Retrieve cached photo array data
    //const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    //this.photos = JSON.parse(photoList.value) || [];
    // Easiest way to detect when running on the web:
    // “when the platform is NOT hybrid, do this”
    if (!this.platform.is('hybrid')) {
      // Display the photo by reading into base64 format
      for (let photo of photos) {
        // Read each saved photo's data from the Filesystem
        const readFile = await Filesystem.readFile({
            path: photo.filepath,
            directory: FilesystemDirectory.Data
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }

  //reset
  public reset(){
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const deleteFile = Filesystem.deleteFile({
          path: photo.filepath,
          directory: FilesystemDirectory.Data
      });
    }
    //emptying photo array
    this.photos.splice(0, this.photos.length);
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });
    console.log(this.photos);
    console.log("done deleting all");
  }

  //removing photo
  public removePhoto(index) {
    // remove from file system
    console.log("before");
    console.log(this.photos);
    Filesystem.deleteFile({
      path: this.photos[index].filepath,
      directory: FilesystemDirectory.Data
    });
    console.log("deleted");
    console.log(this.photos[index].filepath);
    console.log("editing array");
    this.photos.splice(index, 1);
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });
    console.log("after");
    console.log(this.photos);
  }

  //edited
  public async addNewToGallery(photos:Photo[]) {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      direction: CameraDirection.Rear,
      quality: 70
    });

    // Save the picture and add it to photo collection (array pointing it to the file lo)
    const savedImageFile = await this.savePicture(capturedPhoto);
    photos.unshift(savedImageFile);
    console.log("New Phoo array");
    console.log(JSON.stringify(photos))
    return JSON.stringify(photos);
  }

  //function to save photo
  private async savePicture(cameraPhoto: CameraPhoto) {
    const base64Data = await this.readAsBase64(cameraPhoto);
    // Write the file to the data directory
    const fileName = new Date().toISOString().slice(0,19) + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });
    if (this.platform.is('hybrid')) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      return {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath
      };
    }
  }

  //reading as base 64
  private async readAsBase64(cameraPhoto: CameraPhoto) {
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: cameraPhoto.path
      });
      return file.data;
    }
    else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(cameraPhoto.webPath);
      const blob = await response.blob();
      return await this.convertBlobToBase64(blob) as string;
    }
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

//interface
export interface Photo {
  filepath: string;
  webviewPath: string;
}
