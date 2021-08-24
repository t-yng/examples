// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PagerMeta, Todo } from "../../type";

type Data = {
  todos: Todo[];
  meta: PagerMeta;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let todos: any[] = [];
  let meta: any;
  if (req.query.page === "1") {
    todos = [
      {
        title: "TODO1",
        user: {
          name: "taro",
        },
      },
      {
        title: "TODO2",
        user: {
          name: "masaru",
        },
      },
    ];

    meta = {
      currentPage: 1,
      nextPage: 2,
      totalCount: 4,
      totalPages: 2,
    };
  } else if (req.query.page === "2") {
    todos = [
      {
        title: "TODO3",
        user: {
          name: "taro",
        },
      },
      {
        title: "TODO4",
        user: {
          name: "taro",
        },
      },
    ];
    meta = {
      currentPage: 2,
      nextPage: -1,
      totalCount: 4,
      totalPages: 2,
    };
  }

  res.status(200).json({ todos, meta });
}
