import {builder, BuilderContent} from "@builder.io/sdk"
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


// console.log('outside')
// export default async function Page(){
//     console.log('inside')
//     return (
//         <h1>Should be root</h1>
//     );
//
// }


interface PageProps {
    params: {
        slug: string[];
    };
}

console.log('outside the page');
export default async function Page(props: PageProps) {

  console.log('inside the page');

    const content = await builder
      // Get the page content from Builder with the specified options
      .get("page", {
          userAttributes: {
              // Use the page path specified in the URL to fetch the content
              urlPath: "/" + (props?.params?.slug?.join("/") || ""),
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
