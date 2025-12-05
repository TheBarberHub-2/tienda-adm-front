import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Usuario } from '../../../models/usuario';
import { RolEnum } from '../../../models/rolEnum';

@Component({
  selector: 'app-usuario-mod',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './actualizar-usuarios.html',
  styleUrl: './actualizar-usuarios.scss'
})
export class ActualizarUsuarios implements OnInit {
  usuarioForm!: FormGroup;
  roles = Object.values(RolEnum);
  usuarioId: number | null = null;
  loadError = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const idParam = params['id'];
      this.usuarioId = idParam ? Number(idParam) : null;

      if (this.usuarioId) {
        this.loadUsuario(this.usuarioId);
      }
    });
  }

  initForm(): void {
    this.usuarioForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  loadUsuario(id: number): void {
    this.userService.get(id).subscribe({
      next: usuario => {
        this.usuarioForm.patchValue({
          id: usuario.id,
          email: usuario.email,
          nombre: usuario.nombre,
          rol: usuario.rol
        });
      },
      error: () => {
        this.loadError = true;
      }
    });
  }

  onSubmitUsuario(): void {
    if (this.usuarioForm.invalid) {
      this.usuarioForm.markAllAsTouched();
      return;
    }

    const raw = this.usuarioForm.getRawValue();

    const payload: Usuario = {
      ...raw,
      id: this.usuarioId ?? Number(raw.id)
    } as Usuario;

    this.userService.update(payload).subscribe({
      next: updated => {
        console.log('Usuario actualizado:', updated);
      },
      error: () => {
        this.loadError = true;
      }
    });
  }
}