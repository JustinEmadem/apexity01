import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { Faqs } from './pages/faqs/faqs';
import { TermsPolicies } from './pages/terms-policies/terms-policies';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
  },
  {
    path: 'faqs',
    component: Faqs,
  },
  {
    path: 'terms-policies',
    component: TermsPolicies,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
  },
];
