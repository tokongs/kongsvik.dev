import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuider from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import config from "./sanity.conf"

export const urlFor = (source: SanityImageSource) => createImageUrlBuider(config).image(source)
export const useCurrentUser = createCurrentUserHook(config)
export const sanityClient = createClient(config)