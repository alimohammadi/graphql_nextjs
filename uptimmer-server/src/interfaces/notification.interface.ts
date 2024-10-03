export interface INotificationDocuments {
  id?: number;
  userId: number;
  groupName: string;
  emials: string;
  createdAt?: Date;
}

export interface IEmailLocals {
  sender?: string;
  appLink: string;
  appIcon: string;
  appName: string;
  subject?: string;
  usrname?: string;
}
