import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrewMember } from './crewMember';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  constructor() {}
  public getCrewMembers(): Observable<CrewMember[]> {
    const crewMembers: CrewMember[] = [
      {
        name: 'James T. Kirk',
        rank: 'Captain',
        role: 'Command Staff',
        status: 'Active',
        specialization: 'Command and Leadership',
        certifications: 'Starfleet Command Program, Advanced Tactical Training',
        contact: 'Subspace Frequency: 5147.6 Email: captain.kirk@starfleet.ufp',
        avatarUrl:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/William_Shatner_Star_Trek.JPG',
      },
    ];
    return of(crewMembers);
  }
}
