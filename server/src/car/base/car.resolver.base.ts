/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCarArgs } from "./CreateCarArgs";
import { UpdateCarArgs } from "./UpdateCarArgs";
import { DeleteCarArgs } from "./DeleteCarArgs";
import { CarCountArgs } from "./CarCountArgs";
import { CarFindManyArgs } from "./CarFindManyArgs";
import { CarFindUniqueArgs } from "./CarFindUniqueArgs";
import { Car } from "./Car";
import { CarService } from "../car.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Car)
export class CarResolverBase {
  constructor(
    protected readonly service: CarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "read",
    possession: "any",
  })
  async _carsMeta(
    @graphql.Args() args: CarCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Car])
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "read",
    possession: "any",
  })
  async cars(@graphql.Args() args: CarFindManyArgs): Promise<Car[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Car, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "read",
    possession: "own",
  })
  async car(@graphql.Args() args: CarFindUniqueArgs): Promise<Car | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Car)
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "create",
    possession: "any",
  })
  async createCar(@graphql.Args() args: CreateCarArgs): Promise<Car> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Car)
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "update",
    possession: "any",
  })
  async updateCar(@graphql.Args() args: UpdateCarArgs): Promise<Car | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Car)
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "delete",
    possession: "any",
  })
  async deleteCar(@graphql.Args() args: DeleteCarArgs): Promise<Car | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
