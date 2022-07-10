import { HtmlMetaDescriptor, MetaFunction } from "@remix-run/node"
import { Params, Location } from "@remix-run/react"
import { RouteData } from "@remix-run/react/dist/routeData"
import { imageUrlBuilderFor } from "./sanity"

export interface MetaFunctionArgs<LoaderData> {
    data: LoaderData
    parentsData: RouteData
    params: Params
    location: Location
}

interface CustomMetaArgs<LoaderData> {
    title: string | ((args: MetaFunctionArgs<LoaderData>) => string)
    description: string | ((args: MetaFunctionArgs<LoaderData>) => string)
    imageSrc?: string | ((args: MetaFunctionArgs<LoaderData>) => string)
}

export const CustomMetaFunction = <LoaderData>(input: CustomMetaArgs<LoaderData>): MetaFunction => {
    return (args: MetaFunctionArgs<LoaderData>): HtmlMetaDescriptor => {
        const title = typeof input.title == "string" ? `Kongsvik | ${input.title}` : input.title(args);
        const description = typeof input.description == "string" ? input.description : input.description(args);
        let imageSrc = "image-977b4bac71559133b10faaac46c19118a61312d1-1920x500-png"
        if (input.imageSrc)
            imageSrc = typeof input.imageSrc == "string" ? input.imageSrc : input.imageSrc(args);
        const imageUrl = imageUrlBuilderFor(imageSrc).auto("format").url()

        const url = `https://kongsvik.dev${args.location.pathname}`
        return {
            title,
            description,
            charset: "utf-8",
            "og:type": "website",
            "og:url": url,
            "og:title": title,
            "og:description": description,
            "og:image": imageUrl,
            "og:site_name": "Kongsvik.dev",
            "twitter:card": "summary_large_image",
            "twitter:url": url,
            "twitter:title": title,
            "twitter:description": description,
            "twitter:image": imageUrl,

            viewport: "width=device-width,initial-scale=1",
        }
    }
}
