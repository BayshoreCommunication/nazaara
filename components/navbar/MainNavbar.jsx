import NavResponsive from "./NavResponsive";
// export const revalidate = 360;

async function getNavLinkData() {
  // const res = await fetch(`${process.env.API_URL}/api/v1/category/nav-data`, {
  //   headers: {
  //     authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
  //   },
  // });
  return {
    success: true,
    message: "Sale data found successfully",
    data: [
      {
        category: {
          _id: "65fc40a4bac910fdeca0510c",
          title: "Regular Wear",
          slug: "regular-wear",
          status: "published",
          createdAt: "2024-03-21T14:13:56.728Z",
          updatedAt: "2024-03-21T14:22:56.467Z",
          __v: 0,
        },
        sales: [
          {
            _id: "653f4e80f2fea07a43d84791",
            title: "New Arrivals",
            slug: "new-arrivals",
            products: [
              {
                _id: "65fd6294bac910fdeca06f3f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65feea07bac910fdeca0c80e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed8c8bac910fdeca0b0fa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed9e6bac910fdeca0b361",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed1dfbac910fdeca0aab0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fe92aebac910fdeca09b73",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab09bac910fdecaacd08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:34:40.784Z",
            updatedAt: "2024-06-29T13:05:26.151Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711136965/upload/i4zqawi8yrlwfdpwpb2n.jpg",
          },
          {
            _id: "653f4e90f2fea07a43d84793",
            title: "Ready To Ship",
            slug: "ready-to-ship",
            products: [
              {
                _id: "65fd6294bac910fdeca06f3f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660034b8bac910fdeca13e08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65feea07bac910fdeca0c80e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed8c8bac910fdeca0b0fa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed9e6bac910fdeca0b361",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed1dfbac910fdeca0aab0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fecf44bac910fdeca0a5ac",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fc4e70bac910fdeca05b28",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc49d8bac910fdeca0583d",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4da0bac910fdeca05a3e",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4cacbac910fdeca0599a",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc486ebac910fdeca05769",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:34:56.388Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711284472/upload/dv6y7fmhdvjmlthmfbug.jpg",
          },
          {
            _id: "653f4e9ff2fea07a43d84795",
            title: "Limited Stock",
            slug: "limited-stock",
            products: [
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "66766c4bbac910fdeca93d72",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a86c9bac910fdeca9f8ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91dabac910fdecaa1a0c",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66800308bac910fdecae453d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668151d7bac910fdecaf5a2d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683c95dbac910fdecb17cb2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:35:11.055Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711280107/upload/xhgmtufvrhakxm3dkuoc.jpg",
          },
          {
            _id: "653f4eaaf2fea07a43d84797",
            title: "Discount",
            slug: "discount",
            products: [
              {
                _id: "66003b43bac910fdeca14d09",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fee03fbac910fdeca0be24",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660034b8bac910fdeca13e08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fecf44bac910fdeca0a5ac",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66766c4bbac910fdeca93d72",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fc4fe3bac910fdeca05ca6",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4e70bac910fdeca05b28",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc49d8bac910fdeca0583d",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4da0bac910fdeca05a3e",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4cacbac910fdeca0599a",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc486ebac910fdeca05769",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a86c9bac910fdeca9f8ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91dabac910fdecaa1a0c",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66800308bac910fdecae453d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668151d7bac910fdecaf5a2d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:35:22.087Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1705562881/upload/n6xvjpmgiamh3xfafgzu.png",
          },
        ],
        subCategories: [
          {
            _id: "65fc454ebac910fdeca056ff",
            title: "EVERYDAY CHIC",
            slug: "everyday-chic",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719667638/upload/mn8j8gmwq0chgm77g81n.webp",
            featuredImagePublicId: "upload/y4jvdjfrk5rixgxllazx",
            category: "65fc40a4bac910fdeca0510c",
            status: "published",
            createdAt: "2024-03-21T14:33:50.905Z",
            updatedAt: "2024-06-29T13:27:21.652Z",
            __v: 0,
          },
        ],
        fesivals: [],
      },
      {
        category: {
          _id: "65fc40bdbac910fdeca05154",
          title: "Party Wear",
          slug: "party-wear",
          status: "published",
          createdAt: "2024-03-21T14:14:21.187Z",
          updatedAt: "2024-03-21T14:23:05.992Z",
          __v: 0,
        },
        sales: [
          {
            _id: "653f4e80f2fea07a43d84791",
            title: "New Arrivals",
            slug: "new-arrivals",
            products: [
              {
                _id: "65fd6294bac910fdeca06f3f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65feea07bac910fdeca0c80e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed8c8bac910fdeca0b0fa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed9e6bac910fdeca0b361",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed1dfbac910fdeca0aab0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fe92aebac910fdeca09b73",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab09bac910fdecaacd08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:34:40.784Z",
            updatedAt: "2024-06-29T13:05:26.151Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711136965/upload/i4zqawi8yrlwfdpwpb2n.jpg",
          },
          {
            _id: "653f4e90f2fea07a43d84793",
            title: "Ready To Ship",
            slug: "ready-to-ship",
            products: [
              {
                _id: "65fd6294bac910fdeca06f3f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660034b8bac910fdeca13e08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65feea07bac910fdeca0c80e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed8c8bac910fdeca0b0fa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed9e6bac910fdeca0b361",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed1dfbac910fdeca0aab0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fecf44bac910fdeca0a5ac",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fc4e70bac910fdeca05b28",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc49d8bac910fdeca0583d",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4da0bac910fdeca05a3e",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4cacbac910fdeca0599a",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc486ebac910fdeca05769",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:34:56.388Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711284472/upload/dv6y7fmhdvjmlthmfbug.jpg",
          },
          {
            _id: "653f4e9ff2fea07a43d84795",
            title: "Limited Stock",
            slug: "limited-stock",
            products: [
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "66766c4bbac910fdeca93d72",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a86c9bac910fdeca9f8ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91dabac910fdecaa1a0c",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66800308bac910fdecae453d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668151d7bac910fdecaf5a2d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683c95dbac910fdecb17cb2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:35:11.055Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711280107/upload/xhgmtufvrhakxm3dkuoc.jpg",
          },
          {
            _id: "653f4eaaf2fea07a43d84797",
            title: "Discount",
            slug: "discount",
            products: [
              {
                _id: "66003b43bac910fdeca14d09",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fee03fbac910fdeca0be24",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660034b8bac910fdeca13e08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fecf44bac910fdeca0a5ac",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66766c4bbac910fdeca93d72",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fc4fe3bac910fdeca05ca6",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4e70bac910fdeca05b28",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc49d8bac910fdeca0583d",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4da0bac910fdeca05a3e",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4cacbac910fdeca0599a",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc486ebac910fdeca05769",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a86c9bac910fdeca9f8ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91dabac910fdecaa1a0c",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66800308bac910fdecae453d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668151d7bac910fdecaf5a2d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:35:22.087Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1705562881/upload/n6xvjpmgiamh3xfafgzu.png",
          },
        ],
        subCategories: [
          {
            _id: "65fc435ebac910fdeca0558c",
            title: "READY-TO-WEAR-SAREE",
            slug: "ready-to-wear-saree",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711036365/upload/tp7v0jf0mmzuhd1ko0fi.png",
            featuredImagePublicId: "upload/m1vodqqs3mcfr4r2hoht",
            category: "65fc40bdbac910fdeca05154",
            status: "published",
            createdAt: "2024-03-21T14:25:34.951Z",
            updatedAt: "2024-06-22T06:22:44.848Z",
            __v: 0,
          },
          {
            _id: "65fc578cbac910fdeca061c0",
            title: "COUTURE CREATIONS",
            slug: "couture-creations",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711036748/upload/ez1hcxnubqajcxfvuswj.png",
            featuredImagePublicId: "upload/yg73hstlvaowgzadorwt",
            category: "65fc40bdbac910fdeca05154",
            status: "published",
            createdAt: "2024-03-21T15:51:40.091Z",
            updatedAt: "2024-03-21T15:59:11.787Z",
            __v: 0,
          },
          {
            _id: "65fc5b1abac910fdeca06281",
            title: "LUXE LEHENGA ESSEMBLES",
            slug: "luxe-lehenga-essembles",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711037398/upload/osdlprvrwksfivyxywoa.png",
            featuredImagePublicId: "upload/dy9tiztqxmehke2b1cok",
            category: "65fc40bdbac910fdeca05154",
            status: "published",
            createdAt: "2024-03-21T16:06:50.469Z",
            updatedAt: "2024-03-21T16:10:01.731Z",
            __v: 0,
          },
        ],
        fesivals: [
          {
            _id: "654098d9869f73be945701d0",
            title: "Engagement",
            slug: "engagement",
            products: [
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe377bac910fdecad8acb",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-31T06:04:09.738Z",
            updatedAt: "2024-07-04T11:52:15.987Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1720093933/upload/lxjal9ywc4ifrgbvbnih.webp",
          },
          {
            _id: "65409937869f73be945701d3",
            title: "Haldi & Mehndi",
            slug: "haldi-and-mehndi",
            products: [
              {
                _id: "65fe92aebac910fdeca09b73",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91dabac910fdecaa1a0c",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-31T06:05:43.119Z",
            updatedAt: "2024-07-02T12:55:31.498Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719921037/upload/joydp95zk0waxev4hqju.webp",
          },
          {
            _id: "655c52143bd74ae2187b7132",
            title: "Nikkah",
            slug: "nikkah",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719665068/upload/gg7ybaefpkglkiydujfd.webp",
            products: [
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab09bac910fdecaacd08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe377bac910fdecad8acb",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66800308bac910fdecae453d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683c95dbac910fdecb17cb2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-11-21T06:45:40.743Z",
            updatedAt: "2024-07-02T13:30:07.249Z",
            __v: 0,
          },
          {
            _id: "655c52cf3bd74ae2187b7139",
            title: "Walima",
            slug: "walima",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719910027/upload/bxz0vpr6zaxuqcseynub.webp",
            products: [
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab09bac910fdecaacd08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe377bac910fdecad8acb",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668151d7bac910fdecaf5a2d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683c95dbac910fdecb17cb2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-11-21T06:48:47.171Z",
            updatedAt: "2024-07-02T13:30:07.249Z",
            __v: 0,
          },
        ],
      },
      {
        category: {
          _id: "65fc40c3bac910fdeca05157",
          title: "Bridal Wear",
          slug: "bridal-wear",
          status: "published",
          createdAt: "2024-03-21T14:14:27.682Z",
          updatedAt: "2024-07-04T12:05:33.409Z",
          __v: 0,
        },
        sales: [
          {
            _id: "653f4e80f2fea07a43d84791",
            title: "New Arrivals",
            slug: "new-arrivals",
            products: [
              {
                _id: "65fd6294bac910fdeca06f3f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65feea07bac910fdeca0c80e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed8c8bac910fdeca0b0fa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed9e6bac910fdeca0b361",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed1dfbac910fdeca0aab0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fe92aebac910fdeca09b73",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab09bac910fdecaacd08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:34:40.784Z",
            updatedAt: "2024-06-29T13:05:26.151Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711136965/upload/i4zqawi8yrlwfdpwpb2n.jpg",
          },
          {
            _id: "653f4e90f2fea07a43d84793",
            title: "Ready To Ship",
            slug: "ready-to-ship",
            products: [
              {
                _id: "65fd6294bac910fdeca06f3f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660034b8bac910fdeca13e08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65feea07bac910fdeca0c80e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed8c8bac910fdeca0b0fa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed9e6bac910fdeca0b361",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed1dfbac910fdeca0aab0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fecf44bac910fdeca0a5ac",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fc4e70bac910fdeca05b28",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc49d8bac910fdeca0583d",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4da0bac910fdeca05a3e",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4cacbac910fdeca0599a",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc486ebac910fdeca05769",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:34:56.388Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711284472/upload/dv6y7fmhdvjmlthmfbug.jpg",
          },
          {
            _id: "653f4e9ff2fea07a43d84795",
            title: "Limited Stock",
            slug: "limited-stock",
            products: [
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fea89ebac910fdeca0a131",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "66766c4bbac910fdeca93d72",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a86c9bac910fdeca9f8ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91dabac910fdecaa1a0c",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66800308bac910fdecae453d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668151d7bac910fdecaf5a2d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683c95dbac910fdecb17cb2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:35:11.055Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1711280107/upload/xhgmtufvrhakxm3dkuoc.jpg",
          },
          {
            _id: "653f4eaaf2fea07a43d84797",
            title: "Discount",
            slug: "discount",
            products: [
              {
                _id: "66003b43bac910fdeca14d09",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fee03fbac910fdeca0be24",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "66003aaabac910fdeca149fd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660039acbac910fdeca146b5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "660034b8bac910fdeca13e08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fed087bac910fdeca0a7d9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fecf44bac910fdeca0a5ac",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fd93ddbac910fdeca079b4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66766c4bbac910fdeca93d72",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "65fc4fe3bac910fdeca05ca6",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4e70bac910fdeca05b28",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc49d8bac910fdeca0583d",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4da0bac910fdeca05a3e",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc4cacbac910fdeca0599a",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "65fc486ebac910fdeca05769",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a86c9bac910fdeca9f8ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91dabac910fdecaa1a0c",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abb0dbac910fdecaa6006",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba963bac910fdecaac1f4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bfb90bac910fdecab35af",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa489bac910fdecacbb22",
                category: "65fc40a4bac910fdeca0510c",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66800308bac910fdecae453d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668151d7bac910fdecaf5a2d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-30T06:35:22.087Z",
            updatedAt: "2024-07-02T13:30:07.691Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1705562881/upload/n6xvjpmgiamh3xfafgzu.png",
          },
        ],
        subCategories: [
          {
            _id: "667a6ee7bac910fdeca9ead6",
            title: "BRIDAL LEHENGA",
            slug: "bridal-lehenga",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1720094774/upload/jdag9fffzhgttu07zeym.webp",
            featuredImagePublicId: "upload/tnouvduprugzuyk15ez9",
            category: "65fc40c3bac910fdeca05157",
            status: "published",
            createdAt: "2024-06-25T07:16:55.118Z",
            updatedAt: "2024-07-04T12:06:17.343Z",
            __v: 0,
          },
          {
            _id: "668000f1bac910fdecae3ede",
            title: "EXCLUSIVE BRIDAL ATTIRE",
            slug: "exclusive-bridal-attire",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719664877/upload/twzafpfhpxyu9dybplty.webp",
            featuredImagePublicId: "upload/twzafpfhpxyu9dybplty",
            category: "65fc40c3bac910fdeca05157",
            status: "published",
            createdAt: "2024-06-29T12:41:21.911Z",
            updatedAt: "2024-06-29T12:41:21.911Z",
            __v: 0,
          },
          {
            _id: "6683ebb1bac910fdecb196c7",
            title: "SEMI-BRIDAL SHARARA",
            slug: "semi-bridal-sharara",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719922150/upload/arxuayjfmjeesskz5gyn.webp",
            featuredImagePublicId: "upload/pf25f71sgoddgs6jkqgm",
            category: "65fc40c3bac910fdeca05157",
            status: "published",
            createdAt: "2024-07-02T11:59:45.882Z",
            updatedAt: "2024-07-02T12:09:12.860Z",
            __v: 0,
          },
        ],
        fesivals: [
          {
            _id: "654098d9869f73be945701d0",
            title: "Engagement",
            slug: "engagement",
            products: [
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0207bac910fdecab9066",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe377bac910fdecad8acb",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-31T06:04:09.738Z",
            updatedAt: "2024-07-04T11:52:15.987Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1720093933/upload/lxjal9ywc4ifrgbvbnih.webp",
          },
          {
            _id: "65409937869f73be945701d3",
            title: "Haldi & Mehndi",
            slug: "haldi-and-mehndi",
            products: [
              {
                _id: "65fe92aebac910fdeca09b73",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a792bbac910fdeca9f65d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8bc3bac910fdecaa04df",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a8e99bac910fdecaa0f52",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8f4fbac910fdecaa11d1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9105bac910fdecaa15a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91dabac910fdecaa1a0c",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667a97d1bac910fdecaa293c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9f99bac910fdecaa2d2c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa045bac910fdecaa2f1a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa104bac910fdecaa30e4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa186bac910fdecaa32b3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa205bac910fdecaa34c1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab22bbac910fdecaa5035",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abadabac910fdecaa5dec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac4c3bac910fdecaa8198",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acb37bac910fdecaa98a2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acc18bac910fdecaa9f75",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbdbbbac910fdecaafafe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf6bdbac910fdecab6714",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfa6abac910fdecab759d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfde8bac910fdecab800d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfed3bac910fdecab81f8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0255bac910fdecab9282",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0373bac910fdecab99fe",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d03cbbac910fdecab9dd9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0407bac910fdecab9fc9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d16d5bac910fdecabd8cb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1758bac910fdecabdd0e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1d27bac910fdecabeed4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d52c2bac910fdecac4d83",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d53cdbac910fdecac58f1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fb382bac910fdecacd04b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb755bac910fdecace5f6",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb877bac910fdecaced62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fbb61bac910fdecacf759",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcacdbac910fdecad069f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fccc2bac910fdecad1079",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcd38bac910fdecad156b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f8c2bac910fdecb21080",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-10-31T06:05:43.119Z",
            updatedAt: "2024-07-02T12:55:31.498Z",
            __v: 0,
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719921037/upload/joydp95zk0waxev4hqju.webp",
          },
          {
            _id: "655c52143bd74ae2187b7132",
            title: "Nikkah",
            slug: "nikkah",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719665068/upload/gg7ybaefpkglkiydujfd.webp",
            products: [
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a71e3bac910fdeca9f0ce",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8de0bac910fdecaa0d49",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac41bbac910fdecaa7c9a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab09bac910fdecaacd08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf95cbac910fdecab6ebc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf9a3bac910fdecab722a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfae8bac910fdecab7c8a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d02cfbac910fdecab9628",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d06cabac910fdecabafc7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d13e7bac910fdecabc1dd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1533bac910fdecabcd6c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fda14bac910fdecad5285",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe377bac910fdecad8acb",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66800308bac910fdecae453d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a6628bac910fdeca9de8f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683c95dbac910fdecb17cb2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-11-21T06:45:40.743Z",
            updatedAt: "2024-07-02T13:30:07.249Z",
            __v: 0,
          },
          {
            _id: "655c52cf3bd74ae2187b7139",
            title: "Walima",
            slug: "walima",
            featuredImage:
              "https://res.cloudinary.com/nazaara/image/upload/v1719910027/upload/bxz0vpr6zaxuqcseynub.webp",
            products: [
              {
                _id: "667a703abac910fdeca9ef38",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7514bac910fdeca9f1a8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a7694bac910fdeca9f327",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a77f3bac910fdeca9f4c2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a868bbac910fdeca9f84c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a89e7bac910fdeca9ff21",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8b81bac910fdecaa0366",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a8cfcbac910fdecaa0aac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9060bac910fdecaa13a4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a91ebbac910fdecaa1acd",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a93e9bac910fdecaa1f91",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9553bac910fdecaa219e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a95febac910fdecaa24af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667a9695bac910fdecaa2696",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa291bac910fdecaa36bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa327bac910fdecaa3895",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa3cebac910fdecaa3a69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa4dcbac910fdecaa3c41",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa723bac910fdecaa3f40",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa972bac910fdecaa4171",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aa9d9bac910fdecaa4374",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aadc5bac910fdecaa46a3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aae75bac910fdecaa48ad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aaf2cbac910fdecaa4abc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab18cbac910fdecaa4cf8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab32ebac910fdecaa5250",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab6bfbac910fdecaa5498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab728bac910fdecaa56af",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ab8efbac910fdecaa5902",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aba18bac910fdecaa5b20",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abc45bac910fdecaa6565",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abcf4bac910fdecaa67de",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abd7abac910fdecaa6b3d",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abe41bac910fdecaa6dbc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abf36bac910fdecaa713c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667abfb5bac910fdecaa73c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac255bac910fdecaa7622",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac2f6bac910fdecaa78b9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac343bac910fdecaa7a04",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac486bac910fdecaa7f16",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ac631bac910fdecaa841c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667aca6bbac910fdecaa9382",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acadbbac910fdecaa9610",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acbb0bac910fdecaa9b36",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667accb5bac910fdecaaa0f5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acce3bac910fdecaaa247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acd41bac910fdecaaa4ec",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667acdd3bac910fdecaaa796",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667ba901bac910fdecaabf42",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ba9ddbac910fdecaac4a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baa4bbac910fdecaac762",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baaa3bac910fdecaaca21",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab09bac910fdecaacd08",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bab77bac910fdecaacfcc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae00bac910fdecaad2de",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bae6fbac910fdecaad5ad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667baf42bac910fdecaad87f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb0bcbac910fdecaadb6e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb11dbac910fdecaade49",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb170bac910fdecaae127",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb1fcbac910fdecaae40a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb26bbac910fdecaae6f0",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb324bac910fdecaae9da",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb374bac910fdecaaeb97",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bb64ebac910fdecaaeec5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bba95bac910fdecaaf1bc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbb1abac910fdecaaf4fe",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bbd39bac910fdecaaf7fc",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667bc29fbac910fdecaaff9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc7f8bac910fdecab02a9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc83dbac910fdecab0476",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc892bac910fdecab0788",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bc96dbac910fdecab0a9e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bca99bac910fdecab0dbf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd14bac910fdecab10e3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcd60bac910fdecab140b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bce41bac910fdecab1737",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bcf7bbac910fdecab1a67",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd11abac910fdecab1d9b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667bd177bac910fdecab20d3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667cf4b3bac910fdecab5af1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf56fbac910fdecab5cef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf5d4bac910fdecab604c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf61fbac910fdecab63ac",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cf7f3bac910fdecab6b4b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cfaa2bac910fdecab7913",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667cff5dbac910fdecab85a1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d00b8bac910fdecab892a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0125bac910fdecab8cc4",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d04a1bac910fdecaba3b6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d055fbac910fdecaba7c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d061cbac910fdecababf6",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d0d80bac910fdecabb7fa",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1439bac910fdecabc5b5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1499bac910fdecabc992",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d15c0bac910fdecabcf88",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d163dbac910fdecabd51f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1ca1bac910fdecabe9ef",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d1e32bac910fdecabf2e7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d335fbac910fdecabf617",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d34f4bac910fdecabf879",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3551bac910fdecabfac2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d35a1bac910fdecabfeeb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d360bbac910fdecac0107",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3693bac910fdecac053b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d36dabac910fdecac075a",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d376cbac910fdecac0b8e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d3eb3bac910fdecac0e03",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d411dbac910fdecac1214",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4180bac910fdecac1629",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d41f3bac910fdecac1a5c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d42b8bac910fdecac210e",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4318bac910fdecac2545",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4e76bac910fdecac2a64",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4eecbac910fdecac2ea0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4f4cbac910fdecac30f2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d4fbbbac910fdecac353c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d503ebac910fdecac3797",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d508bbac910fdecac3bf0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d510dbac910fdecac404b",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d518cbac910fdecac44ab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5245bac910fdecac4916",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d532fbac910fdecac5006",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5377bac910fdecac547c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5422bac910fdecac5d69",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d54a3bac910fdecac61e2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5567bac910fdecac665f",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d55d3bac910fdecac6ae1",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d5631bac910fdecac6d53",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d56a8bac910fdecac71d9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d570abac910fdecac7663",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667d575cbac910fdecac78d8",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa323bac910fdecaca74c",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa3debac910fdecacb129",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa434bac910fdecacb685",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fa491bac910fdecacbd56",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "667fb19bbac910fdecacca33",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb475bac910fdecacd528",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb5d6bac910fdecacda80",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fb6d6bac910fdecacdf65",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fba46bac910fdecacf263",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fc66cbac910fdecacfcad",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fca76bac910fdecad01cd",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcb66bac910fdecad0b89",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcdccbac910fdecad1a62",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fce50bac910fdecad1f5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcee9bac910fdecad245f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fcfe9bac910fdecad2967",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd0edbac910fdecad2e6f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd164bac910fdecad3377",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd29abac910fdecad38a7",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd383bac910fdecad3db8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd41abac910fdecad4301",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd50bbac910fdecad481e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fd7b7bac910fdecad4d5e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fde15bac910fdecad5afc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe020bac910fdecad7415",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe22bbac910fdecad7fd3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe377bac910fdecad8acb",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe5d1bac910fdecad9bf5",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fec25bac910fdecadbf9a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fedfcbac910fdecadc99d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667feab8bac910fdecadb42e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff4b8bac910fdecadecce",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff5b0bac910fdecadf605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff950bac910fdecae0870",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffab9bac910fdecae11e9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffc80bac910fdecae1e68",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ffe95bac910fdecae2dec",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812517bac910fdecaeaf03",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812787bac910fdecaeb900",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668129b8bac910fdecaec596",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812bbfbac910fdecaed222",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66812ce4bac910fdecaedc94",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813081bac910fdecaee605",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668131eebac910fdecaeef2b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668132dbbac910fdecaefbdc",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668133ffbac910fdecaf0504",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66813543bac910fdecaf0c4e",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814d3bbac910fdecaf1faf",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66814ec5bac910fdecaf2bd9",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681501dbac910fdecaf451b",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6681512ebac910fdecaf4f04",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668151d7bac910fdecaf5a2d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668152d3bac910fdecaf6665",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668153f1bac910fdecaf74a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668157f9bac910fdecaf7ef3",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815988bac910fdecaf891a",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815b31bac910fdecaf9632",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66815c08bac910fdecafa0ee",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667fe7e5bac910fdecada8c8",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822e48bac910fdecb01366",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66822fcfbac910fdecb01f8f",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6682315dbac910fdecb02a50",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823307bac910fdecb03f91",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823416bac910fdecb04aab",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823737bac910fdecb055a4",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823863bac910fdecb06067",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "668239ebbac910fdecb06daa",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823c49bac910fdecb07894",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "66823d27bac910fdecb0838d",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "667ff1fabac910fdecadd731",
                category: "65fc40bdbac910fdeca05154",
              },
              {
                _id: "6683c95dbac910fdecb17cb2",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ee90bac910fdecb19ace",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683efbebac910fdecb1aaad",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f094bac910fdecb1ba17",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f2a8bac910fdecb1cda7",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f36bbac910fdecb1d7a9",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f47ebac910fdecb1e247",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f589bac910fdecb1ed33",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f674bac910fdecb1f7c0",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683f785bac910fdecb205bb",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fb5fbac910fdecb21f07",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fccdbac910fdecb229c3",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fdcebac910fdecb23498",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683ff02bac910fdecb23fab",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "6683fff9bac910fdecb24ad5",
                category: "65fc40c3bac910fdeca05157",
              },
              {
                _id: "668400debac910fdecb2560b",
                category: "65fc40c3bac910fdeca05157",
              },
            ],
            status: "published",
            createdAt: "2023-11-21T06:48:47.171Z",
            updatedAt: "2024-07-02T13:30:07.249Z",
            __v: 0,
          },
        ],
      },
    ],
  };
}

async function getAdvertisementData() {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/nav-advertise/category`,
    {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
    }
  );
  return await res.json();
}

export default async function MainNavbar() {
  const linkPromise = await getNavLinkData();
  const advertisementPromise = await getAdvertisementData();

  // const [links, advertisements] = await Promise.all([
  //   linkPromise,
  //   advertisementPromise,
  // ]);

  // console.log(linkPromise, advertisementPromise);
  // console.log(links, advertisements);

  return (
    <div className="relative">
      <div className="fixed top-0 z-50 shadow-xl w-full">
        <NavResponsive
          sales={linkPromise}
          advertisements={advertisementPromise}
        />
      </div>
    </div>
  );
}
