import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { QuizService } from "./quiz.service";

interface IPayload {
  name: string;
  age: number;
}

@Controller("quiz")
export class QuizController {
  constructor(private readonly service: QuizService) {}

  @Get("list")
  getQuiz() {
    return this.service.getQuiz();
  }

  @Post("create")
  createQuiz(@Body() payload: IPayload) {
    return this.service.createQuiz(
      `hi al, gwapo!, ${payload.name} ${payload.age}`
    );
  }

  @Put("edit/:id")
  updateQuiz(@Param("id") id: number) {
    return this.service.editQuiz(id);
  }
}
