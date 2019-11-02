import { CreateSurveyInput } from '../API.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { APIService } from '../API.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.page.html',
  styleUrls: ['./under-construction.page.scss'],
})
export class UnderConstructionPage implements OnInit {
  surveyForm: FormGroup;
  paidServicesOptions: Array<any> = [
    {value: 'newspapers', label: 'Newspapers with subscription based websites'},
    {value: 'magazines', label: 'Magazines or journals with subscription based websites'},
    {value: 'appsFromSource', label: 'Mobile news apps'},
  ];

  constructor(private router: Router, private userDataService: UserDataService,
              private apiService: APIService, private alertController: AlertController) {}

  async ngOnInit() {
    this.surveyForm = new FormGroup({
      tryReason: new FormControl(null, Validators.required),
      leaveComments: new FormControl(false),
      localityOption: new FormControl(null, Validators.required),
      biasOption: new FormControl(null, Validators.required),
      usedServices: new FormArray([])
    });

    (await this.createAlert()).present();
  }

  async createAlert(): Promise<HTMLIonAlertElement> {
    return await this.alertController.create({
      subHeader: 'Neutrify is still under construction',
      message: '<p>You will be the first to know when Neutrify is ready!</p>'
      + '<p>In the meantime, could you help us understand what you really want from Neutrify '
      + 'by answering a few questions?</p>',
      buttons: ['OK'],
    });
  }

  async onSubmit() {
    const input: CreateSurveyInput = {
      surveyTryReason: this.surveyForm.value.tryReason,
      surveyLeaveComments: this.surveyForm.value.leaveComments,
      surveyLocalityOption: this.surveyForm.value.localityOption,
      surveyBiasOption: this.surveyForm.value.biasOption,
      surveyUsedServices: this.surveyForm.value.usedServices ? this.surveyForm.value.usedServices : [],
      surveyCustomerId: this.userDataService.customerId,
    };


    // create survey
    const createdSurvey = await this.apiService.CreateSurvey(input);

    // update customer
    const updatedCustomer = await this.apiService.UpdateCustomer({
      id: this.userDataService.customerId,
      customerSurveyId: createdSurvey.id
    });

    this.router.navigate(['/']);
  }

  onCheckChange(event) {
    const usedServices = (this.surveyForm.get('usedServices') as FormArray);
    if (event.target.checked) {

      usedServices.push(new FormControl(event.target.value));
    } else {

      const index: number = usedServices.controls.findIndex((ctrl) => {
        return ctrl.value === event;
      });

      usedServices.removeAt(index);
    }
  }
}
