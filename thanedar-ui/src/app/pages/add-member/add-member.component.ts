import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../../material.imports';
import { FamilyService } from '../../services/family.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [CommonModule, FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './add-member.component.html'
})
export class AddMemberComponent {
  member = { name: '', relation: '', age: null, occupation: '' };

  constructor(private familyService: FamilyService, private router: Router) {}

  save() {
    this.familyService.addMember(this.member).subscribe({
      next: () => {
        alert('Member added!');
        this.router.navigate(['/home']);
      },
      error: err => {
        console.error(err);
        alert('Failed to add member');
      }
    });
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
