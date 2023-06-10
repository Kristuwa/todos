export interface Theme {
  color: {
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    bg: string;
    bgSecondary: string;
    btnColor: string;
    accentColor: string;
  };
}

export interface FormValues {
  todo: string;
}

export interface Todo {
  id: string;
  todo: string;
  isDone: boolean;
}
