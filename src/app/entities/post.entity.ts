export class PostEntity {
  id: number;
  userId: number;
  title?: string;
  body?: string;

  constructor(id,
              userId,
              title?,
              body?) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}
