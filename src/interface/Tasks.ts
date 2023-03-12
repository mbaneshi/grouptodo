export interface ITask {
  id: string;
  title: string;
  creation_date: Date;
  state: "done" | "pending";
  group: string;
}

export interface ITasks extends Array<ITask> {}
