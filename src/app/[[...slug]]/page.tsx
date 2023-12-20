import {builder} from "@builder.io/sdk"
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
    params: {
        slug: string[];
    };
}

export default async function Page(props: PageProps) {


  const urlPath = "/" + (props?.params?.slug?.join("/") || "");
  console.log({urlPath});

    const content = await builder
      // Get the page content from Builder with the specified options
      .get("page", {
        options: {
          includeUnpublished: true
        },
        userAttributes: {
          // Use the page path specified in the URL to fetch the content
          urlPath,
        },
      })
      // Convert the result to a promise
      .toPromise();

    return (
      <>
          {/* Render the Builder page */}
          <RenderBuilderContent content={content} />
      </>
    );
}
