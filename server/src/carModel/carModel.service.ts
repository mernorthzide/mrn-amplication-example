import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarModelServiceBase } from "./base/carModel.service.base";

@Injectable()
export class CarModelService extends CarModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
