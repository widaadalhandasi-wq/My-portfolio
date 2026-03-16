import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}

// Open your project in VS Code and answer the following by exploring the generated files: 
//  1)– What is the purpose of the src/app/ folder? 

// This is the main application folder and  it contains:
// Components
// Services
// Modules
// Routing files
//  Any new feature or page you create will usually go inside this folder.


// 2)– What does app.component.ts contain? 

// This file defines the root component of the application and It includes:
// The component class (TypeScript)
// Properties (data)
// Methods (functions)
// selector which is app-root
//  templateUrl and styleUrls that links HTML and CSS


// 3)– What is the role of app.module.ts? 

// This is the root module of the Angular application 

// Its role is to:

// Declare components used in the app

// Import other Angular modules

// Configure dependency injection

// Bootstrap the main component

//  ..Without this file, the app cannot run 



// 4)– Where would you add global CSS styles?

// Global styles are added in:

// src/styles.css

// Applies to the entire application
// Used for:
// Fonts
// Global colors
// Layout resets
// External CSS libraries (e.g., Bootstrap)



//  5)– What does angular.json control? 

// angular.json is the project configuration file 

// It controls:
// Build settings
// Project structure
// Global styles and scripts
// Assets (images, icons, etc.)
// Development & production configurations
// Output paths