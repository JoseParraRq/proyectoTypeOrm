import { UserType } from "../entities/userType.entities";

export class UserTypeLogic extends UserType {
public async getUserTypeById(id:number){
return await UserType.findOneBy({id:id})
}
}
