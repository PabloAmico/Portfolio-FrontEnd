import { Component, OnInit, Input } from '@angular/core';
import {Storage, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage'
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-upload-image-perfil',
  templateUrl: './upload-image-perfil.component.html',
  styleUrls: ['./upload-image-perfil.component.css']
})
export class UploadImagePerfilComponent implements OnInit {

  @Input() id:any;

  persona = {
    id : '',
    nombre : '',
    apellido : '',
    ciudad : '',
    fechaNac : '',
    edad : '',
    imagen_perfil : '',
    imagen_banner : '',
    sobre_mi : ''
  };

  objeto:any;


  constructor(private storage : Storage, private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }

  uploadImage($event:any){
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, 'images/'+file.name);
    uploadBytes(imgRef, file)
    .then(async response => {console.log(response);
    const url = await getDownloadURL(imgRef);
    console.log("URL " +url);
    this.persona.imagen_perfil = url;
    this.persona.id = this.id;
    this.objeto = JSON.stringify(this.persona);
    console.log("PERSONA URL " + this.objeto)

    this.datosPortfolio.nuevaImagenPerfil_Banner(this.objeto,"imagen").subscribe(data=>{

    });

  })
    .catch(error => console.log(error));
    
    /*.then(response => console.log(response))
    .catch(error => console.log(error));*/
    
  }
}
