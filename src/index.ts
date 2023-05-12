import axios from "axios";
import jwt from "jsonwebtoken";

import type { Context, Probot } from "probot";

export = (app: Probot) => {
  app.on("push", (context: Context<"push">) => {
    const repoCloneUrl = context.payload.repository.clone_url;
    const now = Date.now();
    const githubAccessToken = jwt.sign(
      {
        iat: now,
        exp: now + 600,
        iss: 323481,
      },
      process.env.PRIVATE_KEY!,
      { algorithm: "RS256" }
    );
    const accessToken = jwt.sign(
      {
        githubAccessToken,
      },
      process.env.JWT_SECRET_KEY!
    );

    axios({
      method: "POST",
      url: `${process.env.SERVER_URL}/api/projects`,
      params: {
        repository: repoCloneUrl,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  });
};
