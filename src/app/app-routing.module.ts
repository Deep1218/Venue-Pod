import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { ActiveLocationsComponent } from "./views/admin/active-locations/active-locations.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";
import { UserTableComponent } from "./views/admin/user-table/user-table.component";
import { ForgotPasswordComponent } from "./views/auth/forgot-password/forgot-password.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
// import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

import { ChatboxComponent } from "./views/chatbox/chatbox.component";

// venue-item views
import{VenueItemComponent} from "./views/venue-item/venue-item.component";

import { BookedVenuesComponent } from "./views/booked-venues/booked-venues.component";
import { OwnerDashboardComponent } from "./views/owner-dashboard/owner-dashboard.component";
import { PrivacyPolicyComponent } from "./views/privacy-policy/privacy-policy.component";
import { TermsComponent } from "./views/terms/terms.component";


const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "user-table", component: UserTableComponent },
      { path: "active-locations", component: ActiveLocationsComponent},
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "forgot-password", component: ForgotPasswordComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],  
  },
  // no layout views
  { path: "profile", component: ProfileComponent },

  // { path: "landing", component: LandingComponent },
  { path: "chatbox", component: ChatboxComponent},
  {path:'venue-item',component: VenueItemComponent},

  // { path: "landing", component: LandingComponent },
  { path: "booked", component:BookedVenuesComponent},
  { path: "ownerDashboard", component:OwnerDashboardComponent},
  { path: "privacyPolicy", component:PrivacyPolicyComponent },
  { path: "terms" , component:TermsComponent},
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
