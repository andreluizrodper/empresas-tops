import { v4 as uuidv4 } from "uuid";
import store from "@/store";

const collection = "issue";
const api = "https://empresas-tops-api.vercel.app";

const createIssue = async ({ data }) => {
  try {
    const uuid = uuidv4();
    data.uuid = uuid;
    await fetch(`${api}/firebase`, {
      body: JSON.stringify({
        collection,
        data,
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then((data) => data.json());
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
const getIssue = async () => {
  return await fetch(`${api}/firebase/get`, {
    body: JSON.stringify({
      collection,
      where: [
        {
          field: "archived",
          operator: "==",
          value: false,
        },
      ],
      order: [{ field: "created_at", type: "DESC" }],
      limit: 15,
    }),
    method: "POST",
    headers: {
      "content-type": "application/json",
      From: "mail-monster",
    },
  }).then((res) => res.json());
};

export { createIssue, getIssue };
