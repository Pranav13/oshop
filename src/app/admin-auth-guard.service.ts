import { UserService } from './user.service';

import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';      

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth:AuthService,private UserService:UserService) { }

  canActivate(): Observable<boolean>{
         return this.auth.appUser$.pipe
           (map(appUser => appUser.isAdmin ));

  }
}
