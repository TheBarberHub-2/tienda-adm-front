import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Usuario } from '../../../models/usuario';
import { RolEnum } from '../../../models/rolEnum';

@Component({
    selector: 'app-crear-usuarios',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './crear-usuarios.html',
    styleUrl: './crear-usuarios.scss'
})
export class CrearUsuarios implements OnInit {
    usuarioForm!: FormGroup;
    roles = Object.values(RolEnum);
    createError = false;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.initForm();
    }

    ngOnInit(): void {
    }

    initForm(): void {
        this.usuarioForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            nombre: ['', Validators.required],
            rol: ['', Validators.required]
        });
    }

    onSubmitUsuario(): void {
        if (this.usuarioForm.invalid) {
            this.usuarioForm.markAllAsTouched();
            return;
        }

        const raw = this.usuarioForm.getRawValue();

        // ID is not needed for creation usually, backend handles it.
        // But if the model requires it, we might need to handle it.
        // Assuming backend generates ID.
        const payload: Usuario = {
            ...raw
        } as Usuario;

        this.userService.create(payload).subscribe({
            next: created => {
                console.log('Usuario creado:', created);
                this.router.navigate(['/administrar-usuarios']);
            },
            error: () => {
                this.createError = true;
            }
        });
    }
}
