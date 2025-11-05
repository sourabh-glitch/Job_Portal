
import React, { lazy } from 'react';

const DashboardPage = lazy(() => import('../pages/Dashboard'));
const RecruitersPage = lazy(() => import('../pages/Recruiters'));
const TemplatesPage = lazy(() => import('../pages/Templates'));
const MailLogsPage = lazy(() => import('../pages/MailLogs'));
const ManualSendPage = lazy(() => import('../pages/ManualSend'));
const JobsPage = lazy(() => import('../pages/Jobs'));

const protectedRoutes = [
  { path: 'dashboard', element: <DashboardPage />, name: 'Dashboard' },
  { path: 'recruiters', element: <RecruitersPage />, name: 'Recruiters' },
  { path: 'templates', element: <TemplatesPage />, name: 'Email Templates' },
  {
    path: 'manual-send',
    element: <ManualSendPage />, // This is JSX
    name: 'Send Email'
  },
   { path: 'mail-logs', element: <MailLogsPage />, name: 'Mail Logs' },
    {
    path: 'jobs',
    element: <JobsPage />, // This is JSX
    name: 'Jobs'
  },
 
];

export default protectedRoutes;
