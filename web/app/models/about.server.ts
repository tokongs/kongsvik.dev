import groq from "groq"
import sanityClient from "app/lib/sanity"

interface About {
    body: any
}

export const GetAbout  = async (): Promise<About> => sanityClient.fetch(groq`*[_type == "about"][0]`)

export default About