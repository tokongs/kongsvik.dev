import { HtmlMetaDescriptor, MetaFunction } from "@remix-run/node"
import { Params, Location } from "@remix-run/react"
import { RouteData } from "@remix-run/react/dist/routeData"

export interface MetaFunctionArgs<LoaderData> {
    data: LoaderData
    parentsData: RouteData
    params: Params
    location: Location
}

interface CustomMetaArgs<LoaderData> {
    title: string | ((args: MetaFunctionArgs<LoaderData>) => string)
    description: string | ((args: MetaFunctionArgs<LoaderData>) => string)
}

export const CustomMetaFunction = <LoaderData>(input: CustomMetaArgs<LoaderData>): MetaFunction => {
    return (args: MetaFunctionArgs<LoaderData>): HtmlMetaDescriptor => {
        const title = typeof input.title == "string" ? `Kongsvik | ${input.title}` : input.title(args);
        const description = typeof input.description == "string" ? input.description : input.description(args);
        return {
            title,
            description,
            charset: "utf-8",
            "og:type": "website",
            "og:url": `https://kongsvik.dev${args.location.pathname}`,
            "og:title": title,
            "og:description": description,
            viewport: "width=device-width,initial-scale=1",
        }
    }
}
