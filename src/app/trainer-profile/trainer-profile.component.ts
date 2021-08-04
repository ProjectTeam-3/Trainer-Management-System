import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { TrainerProfileService } from '../trainer-profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
  trainer: any;
  token: any;
  imagePath: string;
  isEditProfile: boolean = false;
  editProfileForm: any;
  url: any;
  isNewImage: boolean;
  local: any;
  constructor(
    private profileService: TrainerProfileService,
    private gettoken: AuthService,
    private fb: FormBuilder,
    private rout: Router
  ) {
    this.imagePath = environment.imagePath
    // this.isEditProfile = false;
    this.isNewImage = false;
    this.editProfileForm = this.fb.group({
      fname: ['', Validators.required],
      lname: [''],
      address: [''],
      email: [''],
      phno: [''],
      qual: [''],
      skill: [''],
      comp: [''],
      desgn: [''],
      course: [''],
      img: [''],
      typeemp: [''],
      url: ['']
    });
  }

  ngOnInit(): void {
    this.token = this.gettoken.getToken();
    this.profileService.getTrainerProfile(this.token)
      .subscribe((data) => {
        this.trainer = data;
      })

  }
  editProfile() {
    this.isEditProfile = true;

    this.editProfileForm.setValue({
      fname: this.trainer.fname,
      lname: this.trainer.lname,
      address: this.trainer.address,
      email: this.trainer.email,
      phno: this.trainer.phno,
      qual: this.trainer.qual,
      skill: this.trainer.skill,
      comp: this.trainer.comp,
      desgn: this.trainer.desgn,
      course: this.trainer.course,
      img: this.trainer.img,
      typeemp: this.trainer.typeemp,
      url: ''
    });

    return this.isEditProfile;

  }
  onFileSelected(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      this.isNewImage = true;
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.url = e.target.result;
        this.editProfileForm.controls.url.setValue(this.url);
        console.log(this.url);
        this.isNewImage = true;

        this.editProfileForm.controls.img.setValue(`${event.target.files[0].name}`);
      }
      event.target.files[0];

    }

  }
  save() {
    this.profileService.editTrainerProfile(this.editProfileForm.value).subscribe((res) => {
      this.trainer = this.editProfileForm.value;
      this.isEditProfile = false;
      this.rout.navigate(['/trainer/profile'])
    });

  }

}
