import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "uef5ormc",
  dataset: "production",
  useCdn: true
});