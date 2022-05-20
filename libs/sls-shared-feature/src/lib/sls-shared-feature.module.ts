import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './feature/login/login.component';
import { HomeComponent } from './feature/home/home.component';
import { DashBoardComponent } from './feature/dash-board/dash-board.component';
import { AboutComponent } from './feature/about/about.component';
import { ChatComponent } from './feature/chat/chat.component';
import { RegisterComponent } from './feature/register/register.component';
import { VideoChatComponent } from './feature/video-chat/video-chat.component';
import { FeatureListComponent } from './feature/feature-list/feature-list.component';
import { UserComponent } from './feature/user/user.component';
import { AdminComponent } from './feature/admin/admin.component';
import { SettingComponent } from './feature/setting/setting.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoginComponent,
    HomeComponent,
    DashBoardComponent,
    AboutComponent,
    ChatComponent,
    RegisterComponent,
    VideoChatComponent,
    FeatureListComponent,
    UserComponent,
    AdminComponent,
    SettingComponent
  ],
})
export class SlsSharedFeatureModule {}
