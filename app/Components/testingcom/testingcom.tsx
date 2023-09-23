'use client'

import { MDXProvider } from "@mdx-js/react";
import { Heading } from "../Heading/Heading";

const components = {
    p: Heading.p,
    H1: Heading.H2
  }
  

export default function Restingcom({content}) {
    return (
        <div>
            <MDXProvider components={components}>
                {content}
            </MDXProvider>
        </div>
    )
}