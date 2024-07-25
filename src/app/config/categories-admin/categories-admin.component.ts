import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CatalogoModel } from 'src/app/models/catalogo.model';
import { CatalogoService } from 'src/app/service/catalogo.service';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss'],
})
export class CategoriesAdminComponent implements OnInit {
  catalogo: CatalogoModel = new CatalogoModel();
  catalogoList: CatalogoModel[] = [];
  isEditing: boolean = false;
  index: number = 0;

  constructor(
    private catalogoService: CatalogoService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.listadoCategorias();
  }

  private listadoCategorias() {
    this.catalogoService.getList().subscribe({
      next: (data: CatalogoModel[]) => {
        this.catalogoList = data;
      },
      error: (err: Error) => {
        this.toastrService.error("Error listado categoría"),
        {
          timeOut: 1000,
        };
      },
    });
  }

  selectCatalogo(index: number, catalogo: CatalogoModel) {
    this.catalogo = catalogo;
    this.index = index;
    this.isEditing = true;
  }

  updateCatalogo() {
    this.catalogoService.update(this.catalogo.id, this.catalogo).subscribe({
      next: (data: any) => {
        this.toastrService.success('Actualización completada'), 
        {
          timeOut: 1500,
        };
      },
      error: (err: Error) => {
        this.toastrService.error("Algo salió mal"),
        {
          timeOut: 1000,
        };
      },
    });
  }

  saveCatalogo() {
    this.catalogoService.save(this.catalogo).subscribe({
      next: (data: any) => {
        this.toastrService.success('Guardado con éxito'), 
        {
          timeOut: 1500,
        };
      },
      error: (err: Error) => {
        this.toastrService.error("Algo salió mal"),
        {
          timeOut: 1000,
        };
      },
    });
  }

  deleteCatalogo() {
    this.catalogo = new CatalogoModel();
    this.isEditing = false;
  }

  deleteCatalogoFromList(id: number) {
    this.catalogoService.delete(id).subscribe({
      next: (data: any) => {
        this.toastrService.error("Eliminación exitosa"), {
          timeOut: 1000,
        };
      },
      error: (err: Error) => {
        this.toastrService.error("Algo salió mal"),
        {
          timeOut: 1000,
        };
      },
    });
  }
}
