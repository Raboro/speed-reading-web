export class Text {
  private readonly words: string[];
  private index = 0;

  constructor(text: string) {
    this.words = text.split(" ").filter((word) => word.length > 0);
  }
}
