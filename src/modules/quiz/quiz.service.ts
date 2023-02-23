import { Injectable } from "@nestjs/common";
import { IResponseObj } from "./../../types";

@Injectable()
export class QuizService {
  getQuiz(): IResponseObj {
    return {
      message: "Hello quiz"
    };
  }

  createQuiz(message: string) {
    return {
      message
    };
  }

  editQuiz(id: number) {
    const paramsId = typeof id === "string" ? parseInt(id) : 0;
    return {
      id: paramsId
    };
  }
}
