import * as request from "~/utils/request";

// get Api
export const search = async (q, type = "less") => {
  try {
    const res = await request.get("users/search", {
      params: {
        q,
        type,
      },
    });

    return res.data;
    //   setSearchResult(res.data);
    //   setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
