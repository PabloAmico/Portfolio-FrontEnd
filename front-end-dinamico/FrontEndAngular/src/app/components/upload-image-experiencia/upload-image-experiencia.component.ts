import { Component, OnInit, Input } from '@angular/core';
import {Storage, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage'
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-upload-image-experiencia',
  templateUrl: './upload-image-experiencia.component.html',
  styleUrls: ['./upload-image-experiencia.component.css']
})
export class UploadImageExperienciaComponent implements OnInit {

  @Input() id:any;
  @Input() id_pers:any;
  @Input() name:any;
  objeto:any;

  experiencialaboral = {
    id : '',
    nombre_empresa: '',
    fecha_inicio: '',
    fecha_fin: '',
    descripcion: '',
    url_imagen: '',
    persona_id: ''
  };

  educacion = {
    id: '',
    institucion: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_fin: '',
    url_imagen: '',
    persona_id: ''
  }

  cursos = {
    id: '',
    nombre: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_final: '',
    url_imagen: '',
    persona_id:''
  }

  constructor(private storage : Storage, private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {
  }

  uploadImage($event:any){

    //si la carga es de experiencia
    if(this.name = "exp"){
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, 'images/'+file.name);
    uploadBytes(imgRef, file)
    .then(async response => {console.log(response);
    const url = await getDownloadURL(imgRef);
    console.log("URL " +url);
    this.experiencialaboral.url_imagen = url;
    this.experiencialaboral.id = this.id;
    this.objeto = JSON.stringify(this.experiencialaboral);
    console.log("PERSONA URL " + this.objeto)

    this.datosPortfolio.nuevaImagenBody(this.objeto,"experiencia").subscribe(data=>{

    });

  })
    .catch(error => console.log(error));
  }

  //si la carga es de educacion
  if(this.name = "edu"){
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, 'images/'+file.name);
    uploadBytes(imgRef, file)
    .then(async response => {console.log(response);
    const url = await getDownloadURL(imgRef);
    console.log("URL " +url);
    this.educacion.url_imagen = url;
    this.educacion.id = this.id;
    this.objeto = JSON.stringify(this.educacion);
    console.log("PERSONA URL " + this.objeto)

    this.datosPortfolio.nuevaImagenBody(this.objeto,"educacion").subscribe(data=>{

    });

  })
    .catch(error => console.log(error));
  }

  //si la carga es de cursos
  if(this.name = "cur"){
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, 'images/'+file.name);
    uploadBytes(imgRef, file)
    .then(async response => {console.log(response);
    const url = await getDownloadURL(imgRef);
    console.log("URL " +url);
    this.cursos.url_imagen = url;
    this.cursos.id = this.id;
    this.objeto = JSON.stringify(this.cursos);
    console.log("PERSONA URL " + this.objeto)

    this.datosPortfolio.nuevaImagenBody(this.objeto,"curso").subscribe(data=>{

    });

  })
    .catch(error => console.log(error));
  }
}
  
}
