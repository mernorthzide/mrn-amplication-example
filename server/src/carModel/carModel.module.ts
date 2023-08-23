import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarModelModuleBase } from "./base/carModel.module.base";
import { CarModelService } from "./carModel.service";
import { CarModelController } from "./carModel.controller";
import { CarModelResolver } from "./carModel.resolver";

@Module({
  imports: [CarModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [CarModelController],
  providers: [CarModelService, CarModelResolver],
  exports: [CarModelService],
})
export class CarModelModule {}
