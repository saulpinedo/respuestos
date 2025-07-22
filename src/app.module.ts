import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ModelModule } from './model/model.module';
import { YearModule } from './year/year.module';
import { ItemModule } from './item/item.module';
import { PhotoModule } from './photo/photo.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [UserModule, RoleModule, CategoryModule, BrandModule, ModelModule, YearModule, ItemModule, PhotoModule, RatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
