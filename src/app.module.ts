import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { QuizModule } from "./modules/quiz/quiz.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(), UserModule, QuizModule],
  controllers: [],
  providers: []
})
export class AppModule {}
