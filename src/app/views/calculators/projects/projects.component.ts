import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../../services/properties/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  allProjectKeys: any;
  allProjects: any;
  constructor(private propertiesService: PropertiesService, private router : Router) { 
    this.allProjects = this.propertiesService.getAllProperties();
    this.allProjectKeys = Object.keys(this.allProjects);
  }

  ngOnInit() {
  }

  getReport(idIn){
    this.propertiesService.updateCurrentPropertyInUse(this.allProjects[idIn]);
    this.router.navigate(['/calculators/brrrr/report']);
  }

  getEditReport(idIn){
    this.propertiesService.updateCurrentPropertyInUse(this.allProjects[idIn]);
    this.router.navigate(['/calculators/brrrr/property-info']);
  }

  createNewProjectReport(){
    this.propertiesService.createNewProperty();
    this.router.navigate(['/calculators/brrrr/property-info']);
  }

}
