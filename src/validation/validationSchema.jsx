import * as Yup from "yup";
//  Post Task Step 1 validation
export const PostTaskStep1 = Yup.object().shape({
  title: Yup.string()
    .max(60, "Title must be at most 60 characters")
    .required("Title is required"),
  location: Yup.string().when("locationType", {
    is: "in-person",
    then: Yup.string().required("Location is required"),
    otherwise: Yup.string().nullable(),
  }),
  date: Yup.date()
    .nullable()
    .when("dateType", {
      is: (val) => ["on", "before"].includes(val),
      then: Yup.date().required("Date is required"),
      otherwise: Yup.date().nullable(),
    }),
});
