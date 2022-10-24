import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, listAll, getMetadata} from '@angular/fire/storage';

@Component({
  selector: 'app-info-materia',
  templateUrl: './info-materia.component.html',
  styleUrls: ['./info-materia.component.css']
})
export class InfoMateriaComponent implements OnInit {

  images: string[];
  pdf: string[];
  video: string[];

  constructor(private storage: Storage) { 
    this.images = [];
    this.pdf = [];
    this.video = [];
  }

  ngOnInit(): void {
    this.getImages();
    this.getPdf();
    this.getVideo();
  }

  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    console.log('nombre', file.name);

    uploadBytes(imgRef, file)
    .then(response =>{
      this.getImages();
      console.log(response)
    })
    .catch(error => console.log(error));

  }

  getImages(){
    const imageRef = ref(this.storage, `images`);

    listAll(imageRef)
    .then(async response => {
      console.log(response);
      this.images = [];
      for(let item of response.items){
       const url = await getDownloadURL(item);
       this.images.push(url);

       console.log(url);
      }
    })
    .catch(error => console.log(error));
  }

  uploadPdf($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const pdfRef = ref(this.storage, `pdf/${file.name}`);

    console.log('nombre', file.name);

    uploadBytes(pdfRef, file)
    .then(response =>{
      this.getPdf();
      console.log(response)
    })
    .catch(error => console.log(error));

  }

  getPdf(){
    const pdfsRef = ref(this.storage, `pdf`);

    listAll(pdfsRef)
    .then(async response => {
      console.log(response);
      this.pdf = [];
      for(let itemp of response.items){
       const url = await getDownloadURL(itemp);
       this.pdf.push(url);

       console.log(url);
      }
    })
    .catch(error => console.log(error));
  }

  uploadVideo($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const videoRef = ref(this.storage, `videos/${file.name}`);

    console.log('nombre', file.name);

    uploadBytes(videoRef, file)
    .then(response =>{
      this.getVideo();
      console.log(response)
    })
    .catch(error => console.log(error));

  }

  getVideo(){
    const videosRef = ref(this.storage, `videos`);

    listAll(videosRef)
    .then(async response => {
      console.log(response);
      this.video = [];
      for(let itemv of response.items){
       const url = await getDownloadURL(itemv);
       this.video.push(url);

       console.log(url);
      }
    })
    .catch(error => console.log(error));
  }
  
}
