# Angular Spring Batch

This lib makes a series of component availables to manage Spring Batch jobs form an Angular Front-End.

You can search, list, start, stop and analyse results of spring batch jobs within an Angular app.

This lib is meant to be used with the backend lib for exposing Spring Batch REST API : [spring-batch-rest-api](https://github.com/nicoraynaud/spring-batch-rest-api).


## Authors

This lib was developed by the following persons (if any co-author wants, I can add his full name and github or personal page link right here) :
- Jérome
- Alexis
- Noémie
- Kilian
- Nicolas (me)

## JHipster compatibility

| JHipster      | angular-spring-batch |
| ------------- | -------------------- |
|  5.x          | 1.x.x                |


## Prerequisites

- You need at least the following libs and versions for this lib to work
  - `bootstrap` `4.1.0`
  - `@angular/*` `^6.0.0`
  - `@angular/cli` `^6.0.3`


## Install and integrate

### Install

Install with `yarn` :

```bash
yarn add angular-spring-batch
```
or `npm`

```bash
npm install angular-spring-batch
```

For Angular 5, the following dependency is also needed :

```bash
yarn add rxjs-compat
```

### HOw to use

Add the `SpringBatchModule` module in your app (for example, in JHipster, import it in the `AdminModule` module)

```typescript
import { SpringBatchModule } from 'angular-spring-batch';

@NgModule({
  imports: [
    ...
    SpringBatchModule,
    ...
  ],
})
export class AdminModule {
}
```

### Route

Define the following route : (for JHipster, you can do it in the `admin.routes.ts` file) :

```typescript
import { SpringBatchComponent } from 'angular-spring-batch';

const jobsRoute: Route = {
    path: 'jobs',
    component: SpringBatchComponent,
    data: {
        pageTitle: 'jobs.title'
    }
};

const ADMIN_ROUTES = [auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute, jobsRoute];

...
```

### Translation (JHipster specific)

If needed, you can add a i18N translations in `jobs.json` :

```json
{
  "jobs": {
    "title": "Jobs"
  }
}
```

### In a template

You then just need to add a link to `/admin/jobs` (for example, in JHipster, you can do it in `navbar.component.html`) :

```html
<li>
    <a class="dropdown-item" routerLink="admin/jobs" routerLinkActive="active" (click)="collapseNavbar()">
        <fa-icon [icon]="['fa', 'clock']" [fixedWidth]="true"></fa-icon>
        <span>Jobs</span>
    </a>
</li>
```

## Build and distribute

### Build

```bash
$ npm install
$ npm run build
```

### Test locally

The following script starts `ng serve` as well as a proxy conf that redirects any traffic to `/api` and `/management` toward localhost:8080.
Voir proxy.conf.json pour modifier.

```bash
$ npm run start
```

### Package

```bash
$ npm run packagr
```

### Distribute

```bash
$ cd dist/angular-spring-batch
$ npm publish
```