import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import { NextRequest, NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});



export async function DELETE(request: NextRequest) {

    console.log('entro');
    
    const { fileKey } = await request.json();

    console.log(fileKey);
    
    const utApi = new UTApi();
    await utApi.deleteFiles(fileKey);
  
    return NextResponse.json({ message: "Image Delete" });
  }
  