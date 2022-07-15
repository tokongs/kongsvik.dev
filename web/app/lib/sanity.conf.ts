
const config = {
  projectId: "uef5ormc",
  dataset: "production",
  apiVersion: "2022-06-30", 
  useCdn: process.env.NODE_ENV === 'production',
};

export default config