import { ServicesHomeComponent } from './services-home/services-home.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component' ;
import { FormComponent } from 'src/app/shared/components/form/form.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';

export const pages: any[] = [
  ServicesHomeComponent,
  CreateServiceComponent,
  EditServiceComponent,
  ToolbarComponent,
  FormComponent,
  CardComponent
];
