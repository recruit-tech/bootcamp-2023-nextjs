import { PostLoginInput, PostLoginResponse } from "@/pages/api/login";
import {
  handleFetchReject,
  handleFetchResolve,
} from "@/services/client/apiRoutes";
import { Result } from "@/type";

export const postLogin = (
  input: PostLoginInput
): Promise<Result<PostLoginResponse>> => {
  return fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
    .then((res) => handleFetchResolve<PostLoginResponse>(res))
    .catch(handleFetchReject);
};
