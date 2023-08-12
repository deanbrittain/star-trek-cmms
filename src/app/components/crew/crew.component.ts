import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCrewMemberDialogComponent } from '../add-crew-member-dialog/add-crew-member-dialog.component';
import { CrewMember } from './crewMember';
import { Subscription } from 'rxjs';
import { CrewService } from './crew.service.ts.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit, OnDestroy {
  private crewSubscription!: Subscription;
  protected crewMembers: CrewMember[] = [];
  protected loading: boolean = true;
  constructor(private dialog: MatDialog, private crewService: CrewService) {}

  roleColors = {
    'Command Staff': '	hsl(0, 80%, 36%)',
    'Science Staff': ' 	hsl(221, 59%, 41%)',
    'Medical Staff': '	hsl(221, 59%, 41%)',
    'Operations Staff': '	hsl(39, 64%, 55%)',
    'Security Staff': '	hsl(39, 64%, 55%)',
  };

  getRoleColor(member: CrewMember): string {
    // Assuming member.role is one of the keys in roleColors
    return this.roleColors[member.role] || 'default-color'; // Replace 'default-color' with any fallback color
  }

  ngOnInit(): void {
    setTimeout(() => {
      //set timeout is simulate loading time to show loading spinner
      this.crewSubscription = this.crewService
        .getCrewMembers()
        .subscribe((crewMembers) => {
          this.crewMembers = crewMembers;
          this.loading = false;
        });
    }, 2000);
  }

  toggleDetails(member: CrewMember): void {
    member.showDetails = !member.showDetails;
  }

  openAddCrewMemberDialog(): void {
    const dialogRef = this.dialog.open(AddCrewMemberDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.crewMembers.push(result);
      }
    });
  }

  ngOnDestroy(): void {
    this.crewSubscription.unsubscribe();
  }
}
