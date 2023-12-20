import {builder, BuilderContent} from "@builder.io/sdk"

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page(){

    return (
        <h1>Hello World how are you!!</h1>
    );

}


