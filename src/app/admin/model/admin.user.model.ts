export interface AdminUserModelInf {
  userId: string;
  role: string;
  expiredMinutes: number;
  regDttm: Date;
  description: string;
}


export class AdminUserModel implements AdminUserModelInf {
  constructor(data: AdminUserModelInf){
    this.userId = data.userId;
    this.role = data.role;
    this.expiredMinutes = data.expiredMinutes;
    this.regDttm = data.regDttm;
    this.description = data.description;
  }

  expiredMinutes: number;
  regDttm: Date;
  role: string;
  userId: string;
  description: string;
}
