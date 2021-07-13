/**
 * token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjYwNjE0NDAsImV4cCI6MTYyNjE0Nzg0MCwiYXVkIjoiVVNFUiIsImlzcyI6IktOQVAifQ.PnE-0B1Ss-Kt8rVOK_G5H20DcbUv6ZAS8oQyFMZ6oHg
 *
 */

export const _addBookmark = {
  method: "POST",
  url: "/addBokmark",
  description: `add bookmark to user. Requires bearer token on header for authorization . Eg {"authorization" : "Bearer {token}"}}`,
  params: {
    userId: {
      type: "String",
      option: "required",
    },
    homestayId: {
      type: "String",
      option: "required",
    },
  },
};
