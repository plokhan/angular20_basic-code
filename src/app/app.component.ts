import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { VariablesComponent } from './components/variables/variables.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from "./components/directive/directive.component";

@Component({
  selector: 'app-root',
  imports: [VariablesComponent, DataBindingComponent, DirectiveComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19_full_course';
}
