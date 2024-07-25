import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-care-request-list',
  templateUrl: './care-request-list.component.html',
  styleUrls: ['./care-request-list.component.scss'],
})
export class CareRequestListComponent implements OnInit {
  solicitudesList: SolicitudModel[] = [];

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.getSolicitudes();
  }

  private async getSolicitudes() {
    await this.solicitudService.getList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.solicitudesList = data.filter((solicitud) => {
          return (
            solicitud.esAceptado == false &&
            solicitud.estado == true &&
            solicitud.cuidador == null
          );
        });
      },
    });
  }
}
