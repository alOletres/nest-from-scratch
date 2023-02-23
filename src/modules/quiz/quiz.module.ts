import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoggerMiddleware } from "src/middlewares/logger";
import { QuizController } from "./quiz.controller";
import { QuizService } from "./quiz.service";

@Module({
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/quiz");
  }
}
