import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CarModelService } from "./carModel.service";
import { CarModelControllerBase } from "./base/carModel.controller.base";

@swagger.ApiTags("carModels")
@common.Controller("carModels")
export class CarModelController extends CarModelControllerBase {
  constructor(
    protected readonly service: CarModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
