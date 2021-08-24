export interface Todo {
  title: string;
  user: {
    name: string;
  };
}

export interface PagerMeta {
  currentPage: number;
  nextPage: number;
  totalPages: number;
  totalCount: number;
}
