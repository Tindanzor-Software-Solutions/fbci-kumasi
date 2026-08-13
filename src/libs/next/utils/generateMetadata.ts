import { publicUrls } from "@/config/publicUrls"
import { BRANDING } from "@/shared/constants/branding"
import { pageDescription, pageTitle } from "@/shared/utils/pageMetadata"
import { toCapitalized } from "@/shared/utils/textFormat"

type Path<T extends string> = T extends `/${infer Tail}` ? Tail : T

type GenerateMetadataProps<P extends string> = {
  title: string
  description: string
  images?: string[] | string
  path: Path<P>
  keywords?: string
}

type Metadata = {
  title: string
  description: string
  keywords: string
  opengraph: Opengraph
  siteName: string
  url: string
  metadataBase: URL
  twitter: {
    card: string
    site: string
    images: string
  }
}

type Opengraph = {
  title: string
  description: string
  images: string[] | undefined
}

export function generateMetaData<P extends string>({
  title,
  description,
  images,
  path,
  keywords,
}: GenerateMetadataProps<P>): Metadata {
  const getPath = (path: string) =>
    `${publicUrls.appUrl}/${path.replace(/^\/+/, "")}`

  const metadata: Metadata = {
    title: pageTitle(title),
    description: pageDescription(description),
    url: getPath(path),
    siteName: toCapitalized(BRANDING.name),
    keywords: keywords ?? "",
    metadataBase: new URL("/", publicUrls.appUrl),
    opengraph: {
      title: pageTitle(title),
      description: pageDescription(description),
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      site: publicUrls.appUrl,
      images: "",
    },
  }

  if (images) {
    const allImages = Array.isArray(images) ? images : [images]

    allImages.forEach((image, index) => {
      const url = image.startsWith("http") ? image : getPath(image)
      if (index === 0) metadata.twitter.images = url
      metadata.opengraph.images?.push(url)
    })
  }

  return metadata
}
