/*Interfaz que represente los valores de una tarea*/
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  editing?:boolean;
}
