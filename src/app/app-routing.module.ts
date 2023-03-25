import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'educational-resources',
    loadChildren: () => import('./educational-resources/educational-resources.module').then( m => m.EducationalResourcesPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'patient-info',
    children: [
      {
        path: 'edit-patient-info',
        loadChildren: () => import('./edit-patient-info/edit-patient-info.module').then( m => m.EditPatientInfoPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./patient-info/patient-info.module').then( m => m.PatientInfoPageModule)
      },
    ]
  },
  {
    path: 'medical-record',
    children: [
      {
        path: '',
        loadChildren: () => import('./medical-record/medical-record.module').then( m => m.MedicalRecordPageModule)
      },
      {
        path: 'medical-condition',
        loadChildren: () => import('./medical-condition/medical-condition.module').then( m => m.MedicalConditionPageModule)
      },
      {
        path: 'pathology',
        loadChildren: () => import('./pathology/pathology.module').then( m => m.PathologyPageModule)
      },
      {
        path: 'tracheostomy-details',
        loadChildren: () => import('./tracheostomy-details/tracheostomy-details.module').then( m => m.TracheostomyDetailsPageModule)
      },
      {
        path: 'operative-history',
        loadChildren: () => import('./operative-history/operative-history.module').then( m => m.OperativeHistoryPageModule)
      },
      {
        path: 'edit-pathology',
        loadChildren: () => import('./edit-pathology/edit-pathology.module').then( m => m.EditPathologyPageModule)
      },
      {
        path: 'edit-tracheostomy-details',
        loadChildren: () => import('./edit-tracheostomy-details/edit-tracheostomy-details.module').then( m => m.EditTracheostomyDetailsPageModule)
      },
      {
        path: 'edit-operative-history',
        loadChildren: () => import('./edit-operative-history/edit-operative-history.module').then( m => m.EditOperativeHistoryPageModule)
      },
    ]
  },
  {
    path: 'settings',
    children: [
      {
        path: '',
        loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'change-pw',
        loadChildren: () => import('./change-pw/change-pw.module').then( m => m.ChangePWPageModule)
      },
      {
        path: 'version-history',
        loadChildren: () => import('./version-history/version-history.module').then( m => m.VersionHistoryPageModule)
      },
      {
        path: 'open-version',
        loadChildren: () => import('./open-version/open-version.module').then( m => m.OpenVersionPageModule)
      },
    ]  
  },
  {
    path: 'appointments',
    loadChildren: () => import('./appointments/appointments.module').then( m => m.AppointmentsPageModule)
  },
  {
    path: 'saved-appointment',
    loadChildren: () => import('./saved-appointment/saved-appointment.module').then( m => m.SavedAppointmentPageModule)
  },
  {
    path: 'appointment-reminder',
    loadChildren: () => import('./appointment-reminder/appointment-reminder.module').then( m => m.AppointmentReminderPageModule)
  },
  {
    path: 'edit-medical-conditions',
    loadChildren: () => import('./edit-medical-conditions/edit-medical-conditions.module').then( m => m.EditMedicalConditionsPageModule)
  },
  {
    path: 'view-operative-history',
    loadChildren: () => import('./view-operative-history/view-operative-history.module').then( m => m.ViewOperativeHistoryPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
