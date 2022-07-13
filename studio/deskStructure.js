import S from '@sanity/desk-tool/structure-builder'
import SocialPreview from 'part:social-preview/component'

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (['post'].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view.component(SocialPreview({
        prepareFunction: (
          { title, description, mainImage, slug }
        ) => ({
          title,
          description,
          slug,
          ogImage: mainImage,
          siteUrl: `https://kongsvik.dev/blog/${slug ? slug.current : ""}`,
        }),
      })).title('Social & SEO'),
    ])
  }
  return S.document().views([S.view.form()])
}

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title("About")
        .child(
          S.document()
            .schemaType("about")
            .documentId("about")
        ),
      ...S.documentTypeListItems().filter(item => !["about"].includes(item.getId()))
    ])