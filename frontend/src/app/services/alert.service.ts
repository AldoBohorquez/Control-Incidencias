import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class AlertsService {

    constructor() { }

    alert(msn:string, icon: 'error' | 'info' | 'question' | 'success' | 'warning'){
        Swal.fire({
            text: msn,
            icon,
            showConfirmButton: false,
            timer: 1500,
            toast: true,
            position: 'top-end'
        })
    }
}
