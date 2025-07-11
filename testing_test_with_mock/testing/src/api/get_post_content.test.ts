import {getPostContent} from "@/api/get_post_content";
import {fetchPost} from "@/api/fetch_post";

jest.mock("@/api/fetch_post", () => {
  return {
    fetchPost: jest.fn().mockImplementation((id: number) => {
      if (id === 1) {
        return Promise.resolve({content: "Mock Post Content"});
      } else {
        return Promise.resolve(null);
      }
    }),
  };
});

describe("getPostContent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("returns correct data", async () => {
    const ret = await getPostContent(1);
    expect(ret).toBe("Mock Post Content");
    expect(fetchPost).toHaveBeenCalledWith(1);
    expect(fetchPost).toBeCalledTimes(1);
  });

  test("returns null on fetchPost failure", async () => {
    const ret = await getPostContent(-1);
    expect(ret).toBeNull();
    expect(fetchPost).toHaveBeenCalledWith(-1);
    expect(fetchPost).toBeCalledTimes(1);
  });
});
